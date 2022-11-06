import  React from 'react';
import { useHMSStore, selectPeers} from '@100mslive/react-sdk';

const Participants:React.FC = () => {
   const peers = useHMSStore(selectPeers);

   peers.forEach(peer => {
    console.log(peer)
   })


  return(
    <div>
      {peers.map((peer) => 
         <React.Fragment key = {peer.id}>
          <div>
            <span className='font-bold text-sm text-gray-600'>{peer.roleName === 'recruiter'? 'Recruiter': 'Candidate'}:</span>
            <span className={`font-semibold text-sm ${peer.roleName === 'recruiter' ? 'text-primary-800': 'text-tertiary'}`}> {peer.name}</span>
            <span className={`text-xs text-primary-800 font-bold ${peer.roleName === 'recruiter' ? 'text-primary-800': 'text-tertiary'}`}>{peer.isLocal? '(You)': '' }</span>
          </div>
         </React.Fragment>
      )}
      
    </div>
  )
}

export default Participants;