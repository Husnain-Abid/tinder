import { useState } from "react"
import image1 from "../../asset/image1.jpeg"
import { useNavigate } from "react-router-dom";


const AddMedia = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("edit")
    const [smartPhotos, setSmartPhotos] = useState(false)
    const [showGender, setShowGender] = useState(true)
    const [showAge, setShowAge] = useState(true)

    return (
        <div className="bg-gray-50 min-h-screen pb-20 ">
            {/* Header */}
            <div className="flex justify-between items-start  p-4  border-gray-200">
                <div>
                    <h1 className="text-gray-500 font-bold">Create New </h1>
                    <p className="text-sm">Select a content type</p>
                </div>

                <div onClick={()=>navigate("/home")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </div>


            </div>

            {/* Main Content */}
            <div className="px-4">

                {/* Profile Photos */}
                <div className="relative mt-4 text-white overflow-hidden font-bold w-full h-20 flex justify-between p-4  bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl">

                    <div>
                        <p className="text-[10px] ">Update from</p>
                        <h1 className="text-xl ">Gallery</h1>
                    </div>
                    <div className="-rotate-12 absolute -bottom-8 -right-2 ">

                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-images-icon lucide-images"><path d="M18 22H4a2 2 0 0 1-2-2V6" /><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" /><circle cx="12" cy="8" r="2" /><rect width="16" height="16" x="6" y="2" rx="2" /></svg>                    </div>
                </div>

                {/* Camera Photos */}
                <div className="relative mt-4 text-white overflow-hidden font-bold w-full h-20 flex justify-between p-4  bg-gradient-to-r from-purple-700 to-purple-400 rounded-2xl">

                    <div>
                        <p className="text-[10px] ">Capture from</p>
                        <h1 className="text-xl ">Camera</h1>
                    </div>
                    <div className="-rotate-12 absolute -bottom-6 -right-2 ">

                        <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera-icon lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
                    </div>




                </div>



            </div>


        </div>
    )
}

export default AddMedia

