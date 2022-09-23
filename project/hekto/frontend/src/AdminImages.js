import './AdminImages.css';
import AdminImagesMonitor_LCD1 from './Images/AdminImagesMonitor_LCD1.png';

function AdminImagesComponent({image}){
    return <>
        <div className="AdminImages_inner">
            <div className="AdminImages_inn_image">
                <img src={image}></img>
            </div>
        </div>
    </>
}

function AdminImages(){
    return(
        <>
             <div className="AdminImages_outer">
                <AdminImagesComponent image={AdminImagesMonitor_LCD1}/>
                <AdminImagesComponent image={AdminImagesMonitor_LCD1}/>
                <AdminImagesComponent image={AdminImagesMonitor_LCD1}/>
                <AdminImagesComponent image={AdminImagesMonitor_LCD1}/>
                <AdminImagesComponent image={AdminImagesMonitor_LCD1}/>
                <AdminImagesComponent image={AdminImagesMonitor_LCD1}/>
            </div>
        </>
    )
}
export default AdminImages;