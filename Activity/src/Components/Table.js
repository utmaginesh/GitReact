import { Activity,AlarmClock,AlignCenter,AlertCircle,Annoyed,Apple,Ban,Bluetooth
,Bike,Cat,Angry,FolderOpen,PhoneCall,PencilRuler,RadioTower,Rocket} from "lucide-react";
export const Table = ()=>{
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',backgroundColor: '#f0f0f0'}}>
        <table border="5px" cellSpacing="0px" align="center" style={{width:'450px',height:'450px', textAlign:'center',backgroundColor:'white'}}>
          <tbody>
            <tr>
              <td><Activity/></td>
              <td><AlarmClock/></td>
              <td><AlignCenter/></td>
              <td><AlertCircle/></td>
            </tr>
            <tr>
              <td><Annoyed/></td>
              <td><Apple/></td>
              <td><Rocket/></td>
              <td><Ban/></td>
            </tr>
            <tr>
              <td><Bluetooth/></td>
              <td><Bike/></td>
              <td><Cat/></td>
              <td><Angry/></td>
            </tr>
            <tr>
              <td><FolderOpen/></td>
              <td><PhoneCall/></td>
              <td><PencilRuler/></td>
              <td><RadioTower/></td>
            </tr>
          </tbody>
        </table>
        </div>
    )
}