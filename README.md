# README

This repo reproduces the IDL error when using a reserve on a account state object in Anchor:

```
❯ anchor test
    BPF SDK: /home/utx0/.local/share/solana/install/releases/1.9.6/solana-release/bin/sdk/bpf
cargo-build-bpf child: rustup toolchain list -v
cargo-build-bpf child: cargo +bpf build --target bpfel-unknown-unknown --release
warning: unused variable: `ctx`
 --> programs/anchor_vanilla/src/lib.rs:9:23
  |
9 |     pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
  |                       ^^^ help: if this is intentional, prefix it with an underscore: `_ctx`
  |
  = note: `#[warn(unused_variables)]` on by default

warning: `anchor_vanilla` (lib) generated 1 warning
    Finished release [optimized] target(s) in 0.09s
cargo-build-bpf child: /home/utx0/.local/share/solana/install/releases/1.9.6/solana-release/bin/sdk/bpf/dependencies/bpf-tools/llvm/bin/llvm-readelf --dyn-symbols /home/utx0/Code/anchor_vanilla/target/deploy/anchor_vanilla.so

To deploy this program:
    $ solana program deploy /home/utx0/Code/anchor_vanilla/target/deploy/anchor_vanilla.so
The program address will default to this keypair (override with --program-id):
  /home/utx0/Code/anchor_vanilla/target/deploy/anchor_vanilla-keypair.json
yarn run v1.22.17
warning package.json: No license field
$ /home/utx0/Code/anchor_vanilla/node_modules/.bin/ts-mocha -p ./tsconfig.json -t 1000000 'tests/**/*.ts'

IdlError: Type not found: {"name":"reserved","type":{"defined":"PoolStateReserve"}}
    at Function.fieldLayout (/home/utx0/Code/anchor_vanilla/node_modules/@project-serum/anchor/src/coder/idl.ts:88:19)
    at /home/utx0/Code/anchor_vanilla/node_modules/@project-serum/anchor/src/coder/idl.ts:116:28
    at Array.map (<anonymous>)
    at Function.typeDefLayout (/home/utx0/Code/anchor_vanilla/node_modules/@project-serum/anchor/src/coder/idl.ts:115:48)
    at /home/utx0/Code/anchor_vanilla/node_modules/@project-serum/anchor/src/coder/accounts.ts:28:39
    at Array.map (<anonymous>)
    at new AccountsCoder (/home/utx0/Code/anchor_vanilla/node_modules/@project-serum/anchor/src/coder/accounts.ts:27:49)
    at new Coder (/home/utx0/Code/anchor_vanilla/node_modules/@project-serum/anchor/src/coder/index.ts:40:21)
    at new Program (/home/utx0/Code/anchor_vanilla/node_modules/@project-serum/anchor/src/program/index.ts:263:19)
    at /home/utx0/Code/anchor_vanilla/node_modules/@project-serum/anchor/src/workspace.ts:59:36
    at Array.forEach (<anonymous>)
    at Object.get (/home/utx0/Code/anchor_vanilla/node_modules/@project-serum/anchor/src/workspace.ts:52:10)
    at Suite.<anonymous> (/home/utx0/Code/anchor_vanilla/tests/anchor_vanilla.ts:10:36)
    at Object.create (/home/utx0/Code/anchor_vanilla/node_modules/mocha/lib/interfaces/common.js:148:19)
    at context.describe.context.context (/home/utx0/Code/anchor_vanilla/node_modules/mocha/lib/interfaces/bdd.js:42:27)
    at Object.<anonymous> (/home/utx0/Code/anchor_vanilla/tests/anchor_vanilla.ts:5:1)
    at Module._compile (node:internal/modules/cjs/loader:1097:14)
    at Module.m._compile (/home/utx0/Code/anchor_vanilla/node_modules/ts-node/src/index.ts:439:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1151:10)
    at Object.require.extensions.<computed> [as .ts] (/home/utx0/Code/anchor_vanilla/node_modules/ts-node/src/index.ts:442:12)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:999:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.exports.requireOrImport (/home/utx0/Code/anchor_vanilla/node_modules/mocha/lib/nodejs/esm-utils.js:60:20)
    at Object.exports.loadFilesAsync (/home/utx0/Code/anchor_vanilla/node_modules/mocha/lib/nodejs/esm-utils.js:103:20)
    at singleRun (/home/utx0/Code/anchor_vanilla/node_modules/mocha/lib/cli/run-helpers.js:125:3)
    at Object.exports.handler (/home/utx0/Code/anchor_vanilla/node_modules/mocha/lib/cli/run.js:374:5)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```