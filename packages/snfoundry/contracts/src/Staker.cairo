use openzeppelin_token::erc20::interface::{IERC20CamelDispatcher, IERC20CamelDispatcherTrait};
use starknet::ContractAddress;

#[starknet::interface]
pub trait IStaker<T> {
    fn execute(ref self: T);
    fn stake(ref self: T, amount: u256);
    fn withdraw(ref self: T);
    fn balances(self: @T, account: ContractAddress) -> u256;
    fn completed(self: @T) -> bool;
    fn deadline(self: @T) -> u64;
    fn example_external_contract(self: @T) -> ContractAddress;
    fn open_for_withdraw(self: @T) -> bool;
    fn eth_token_dispatcher(self: @T) -> IERC20CamelDispatcher;
    fn threshold(self: @T) -> u256;
    fn total_balance(self: @T) -> u256;
    fn time_left(self: @T) -> u64;
}

#[starknet::contract]
pub mod Staker {
    use starknet::storage::Map;
    use starknet::{get_block_timestamp, get_caller_address, get_contract_address};
    use super::{ContractAddress, IERC20CamelDispatcher, IERC20CamelDispatcherTrait, IStaker};

    const THRESHOLD: u256 = 1000000000000000000; // ONE_ETH_IN_WEI: 10 ^ 18

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        Stake: Stake,
    }

    #[derive(Drop, starknet::Event)]
    struct Stake {
        #[key]
        sender: ContractAddress,
        amount: u256,
    }

    #[storage]
    struct Storage {
        eth_token_dispatcher: IERC20CamelDispatcher,
        balances: Map<ContractAddress, u256>,
        deadline: u64,
        open_for_withdraw: bool,
        external_contract_address: ContractAddress,
        threshold: u256,
    }

    #[constructor]
    pub fn constructor(
        ref self: ContractState,
        eth_contract: ContractAddress,
        external_contract_address: ContractAddress,
    ) {
        self.eth_token_dispatcher.write(IERC20CamelDispatcher { contract_address: eth_contract });
        self.external_contract_address.write(external_contract_address);
        self.threshold.write(THRESHOLD);  // Set threshold to 1 ether (10^18 wei)
        self.deadline.write(get_block_timestamp() + 259200);  // Set deadline to 72 horas from now
    }

    #[abi(embed_v0)]
    impl StakerImpl of IStaker<ContractState> {
        fn stake(
            ref self: ContractState, amount: u256,
        ) { 
            assert!(get_block_timestamp() < self.deadline.read(), "Staking period has ended");

            let sender = get_caller_address();
            self.eth_token_dispatcher.read().transferFrom(sender, get_contract_address(), amount);

            let new_balance = self.balances.read(sender) + amount;
            self.balances.write(sender, new_balance);

            self.emit(Stake { sender, amount });
        }

        fn execute(ref self: ContractState) {
            assert!(get_block_timestamp() >= self.deadline.read(), "Staking period has not ended yet");

            let staked_amount = self.eth_token_dispatcher.read().balanceOf(get_contract_address());

            if staked_amount >= self.threshold.read() {
                self.complete_transfer(staked_amount);
            } else {
                // Enable withdrawals if the threshold is not met
                self.open_for_withdraw.write(true);
            }
        }

        fn withdraw(ref self: ContractState) {
            // Ensure withdrawals are allowed after the deadline
            assert!(self.open_for_withdraw.read(), "Withdrawals are not open yet");

            let sender = get_caller_address();
            let balance = self.balances.read(sender);

            // Reset the user's balance and allow them to withdraw their funds
            self.balances.write(sender, 0);
            self.eth_token_dispatcher.read().transfer(sender, balance);
        }

        fn balances(self: @ContractState, account: ContractAddress) -> u256 {
            self.balances.read(account)
        }

        fn total_balance(self: @ContractState) -> u256 {
            self.balances.read(get_contract_address())
        }

        fn deadline(self: @ContractState) -> u64 {
            self.deadline.read()
        }

        fn threshold(self: @ContractState) -> u256 {
            self.threshold.read()
        }

        fn eth_token_dispatcher(self: @ContractState) -> IERC20CamelDispatcher {
            self.eth_token_dispatcher.read()
        }

        fn open_for_withdraw(self: @ContractState) -> bool {
            self.open_for_withdraw.read()
        }

        fn example_external_contract(self: @ContractState) -> ContractAddress {
            self.external_contract_address.read()
        }

        fn completed(self: @ContractState) -> bool {
            false
        }

        fn time_left(self: @ContractState) -> u64 {
            let time_left = self.deadline.read() - get_block_timestamp();
            if time_left > 0 {
                return time_left;
            }
            return 0;
        }
    }

    #[generate_trait]
    impl InternalImpl of InternalTrait {
        fn complete_transfer(
            ref self: ContractState, amount: u256,
        ) {
            self.eth_token_dispatcher.read().approve(self.external_contract_address.read(), amount);
            self.eth_token_dispatcher.read().transfer(self.external_contract_address.read(), amount);
        }

        fn not_completed(ref self: ContractState) {
            // Implement logic to prevent execution if staking is not completed
        }
    }
}

