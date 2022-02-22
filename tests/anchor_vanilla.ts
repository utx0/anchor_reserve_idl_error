import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
// Types
import { AnchorVanilla, anchorVanillaIDL } from './idl';
// Get the program ID from there
import * as localJsonIdl from "../target/idl/anchor_vanilla.json";

describe('anchor_vanilla', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());


  const anchorVanillaProgramID = new anchor.web3.PublicKey(localJsonIdl["metadata"]["address"]);
  // Craft your Program to override defaults
  const program = new anchor.Program(anchorVanillaIDL, anchorVanillaProgramID) as Program<AnchorVanilla>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
