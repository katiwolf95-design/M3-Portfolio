import Name from './Name.jsx'
import ProfileImage from '../profile/ProfileImage.jsx'
import AboutText from './AboutText.jsx'

function Profile() {
    return (
        <section className=" max-w-[1200px] mx-auto px-6 py-30">
            <div className="w-4/5 ml-auto bg-white flex md:flex-row gap-8
        ">
                <div className="shrink-0">
                    <ProfileImage />
                </div>

                <div className='text-left'>
                    <Name />
                    <AboutText />
                </div>
            </div>
        </section>
    )
}

export default Profile