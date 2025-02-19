/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  devnet: {
    ExampleExternalContract: {
      address:
        "0x5d1d3e15da79f498d989f6134955640ba1ae46599784b38a165d75d7c008b23",
      abi: [
        {
          type: "impl",
          name: "ExampleExternalContractImpl",
          interface_name:
            "contracts::ExampleExternalContract::IExampleExternalContract",
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::ExampleExternalContract::IExampleExternalContract",
          items: [
            {
              type: "function",
              name: "complete",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "completed",
              inputs: [],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::ExampleExternalContract::ExampleExternalContract::Event",
          kind: "enum",
          variants: [],
        },
      ],
      classHash:
        "0x4d686f223f3dc5a6db13a2216ca8d5c266a16c8fa573a0e857947a0a593c589",
    },
    Staker: {
      address:
        "0x45595eb20b19f4a0b28c6b45785dc02fa67953e4d4c8b67da67941dd85328f9",
      abi: [
        {
          type: "impl",
          name: "StakerImpl",
          interface_name: "contracts::Staker::IStaker",
        },
        {
          type: "struct",
          name: "core::integer::u256",
          members: [
            {
              name: "low",
              type: "core::integer::u128",
            },
            {
              name: "high",
              type: "core::integer::u128",
            },
          ],
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "struct",
          name: "openzeppelin_token::erc20::interface::IERC20CamelDispatcher",
          members: [
            {
              name: "contract_address",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::Staker::IStaker",
          items: [
            {
              type: "function",
              name: "execute",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "stake",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u256",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "withdraw",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "balances",
              inputs: [
                {
                  name: "account",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "completed",
              inputs: [],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "deadline",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u64",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "example_external_contract",
              inputs: [],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "open_for_withdraw",
              inputs: [],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "eth_token_dispatcher",
              inputs: [],
              outputs: [
                {
                  type: "openzeppelin_token::erc20::interface::IERC20CamelDispatcher",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "threshold",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "total_balance",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "time_left",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u64",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "eth_contract",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "external_contract_address",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Staker::Staker::Stake",
          kind: "struct",
          members: [
            {
              name: "sender",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "amount",
              type: "core::integer::u256",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Staker::Staker::Event",
          kind: "enum",
          variants: [
            {
              name: "Stake",
              type: "contracts::Staker::Staker::Stake",
              kind: "nested",
            },
          ],
        },
      ],
      classHash:
        "0x27c1e73d8553cb88c043c56ec7e1dd02f3324bfb57cdc79ff9c15e8694ab83e",
    },
  },
  sepolia: {
    ExampleExternalContract: {
      address:
        "0x22651d94ac9ebaafb0929f07593844b08b4727d4afdb2baaa2321cdaeebecd2",
      abi: [
        {
          type: "impl",
          name: "ExampleExternalContractImpl",
          interface_name:
            "contracts::ExampleExternalContract::IExampleExternalContract",
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::ExampleExternalContract::IExampleExternalContract",
          items: [
            {
              type: "function",
              name: "complete",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "completed",
              inputs: [],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::ExampleExternalContract::ExampleExternalContract::Event",
          kind: "enum",
          variants: [],
        },
      ],
      classHash:
        "0x4d686f223f3dc5a6db13a2216ca8d5c266a16c8fa573a0e857947a0a593c589",
    },
    Staker: {
      address:
        "0x5833acf3eaf9434fc51a820b8125465d871f2eea2f8a617842228c5174fb658",
      abi: [
        {
          type: "impl",
          name: "StakerImpl",
          interface_name: "contracts::Staker::IStaker",
        },
        {
          type: "struct",
          name: "core::integer::u256",
          members: [
            {
              name: "low",
              type: "core::integer::u128",
            },
            {
              name: "high",
              type: "core::integer::u128",
            },
          ],
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "struct",
          name: "openzeppelin_token::erc20::interface::IERC20CamelDispatcher",
          members: [
            {
              name: "contract_address",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::Staker::IStaker",
          items: [
            {
              type: "function",
              name: "execute",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "stake",
              inputs: [
                {
                  name: "amount",
                  type: "core::integer::u256",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "withdraw",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "balances",
              inputs: [
                {
                  name: "account",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "completed",
              inputs: [],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "deadline",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u64",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "example_external_contract",
              inputs: [],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "open_for_withdraw",
              inputs: [],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "eth_token_dispatcher",
              inputs: [],
              outputs: [
                {
                  type: "openzeppelin_token::erc20::interface::IERC20CamelDispatcher",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "threshold",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "total_balance",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "time_left",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u64",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "eth_contract",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "external_contract_address",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Staker::Staker::Stake",
          kind: "struct",
          members: [
            {
              name: "sender",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "amount",
              type: "core::integer::u256",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::Staker::Staker::Event",
          kind: "enum",
          variants: [
            {
              name: "Stake",
              type: "contracts::Staker::Staker::Stake",
              kind: "nested",
            },
          ],
        },
      ],
      classHash:
        "0x8b9b3d1193b33aa35969f461c708933212269f5e1e9b4699cc912bfb41bf9e",
    },
  },
} as const;

export default deployedContracts;
