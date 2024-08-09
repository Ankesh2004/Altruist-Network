import * as Client from '@web3-storage/w3up-client'
import { StoreMemory } from '@web3-storage/w3up-client/stores/memory'
import * as Proof from '@web3-storage/w3up-client/proof'
import { Signer } from '@web3-storage/w3up-client/principal/ed25519'
import * as DID from '@ipld/dag-ucan/did'
import dotenv from "dotenv";
import Response from 'express'
dotenv.config();

export async function getDelegation(did) {
  try {
    console.log('Received DID:', did)
    
    const principal = Signer.parse(process.env.KEY)
    if (!principal) {
      throw new Error('Invalid or missing KEY in environment variables')
    }
    
    const store = new StoreMemory()
    const client = await Client.create({ principal, store })
    
    const proof = await Proof.parse(process.env.PROOF)
    if (!proof) {
      throw new Error('Invalid or missing PROOF in environment variables')
    }
    
    const space = await client.addSpace(proof)
    await client.setCurrentSpace(space.did())
    
    console.log('Space DID:', space.did())
    
    const audience = DID.parse(did)
    const abilities = ['space/blob/add', 'space/index/add', 'filecoin/offer', 'upload/add']
    const expiration = Math.floor(Date.now() / 1000) + (60 * 60 * 24)
    
    const delegation = await client.createDelegation(audience, abilities, { expiration })
    console.log(delegation);
    const archive = await delegation.archive()
    console.log(archive)

    if (archive.ok) {
      // Return the Uint8Array directly
      return archive.ok
    } else {
      throw new Error('Failed to create delegation archive')
    }
  } catch (error) {
    console.error('Error in getDelegation:', error)
    throw error
  }
}