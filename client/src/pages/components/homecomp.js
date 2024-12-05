
import RightSidehome from './HomeComps/rightsidehome';
import LeftSideHomeComp from './HomeComps/leftsidehome';
import CenterHomeComp from './HomeComps/centerhome';
const HomeComp = () => {
    return ( 
        <div>
              <div className='row'>
                    <div className='col-3'>
                        <LeftSideHomeComp/>
                    </div>
                    <div className='col-6'>
                        <CenterHomeComp/>
                    </div>
                    <div className='col-3'>
                        <RightSidehome/>  
                    </div>
                </div>
        </div>
     );
}
 
export default HomeComp;