import Name from './Name.jsx'
import ProfileImage from './ProfileImage.jsx'
import AboutText from './AboutText.jsx'

function Profile() {
    return (
        <section className="
            flex flex-col 
            items-center px-6 py-10 
            text-center 
            md:max-w-2xl md:mx-auto
            md:flex md:gap-6
            lg:max-w-5xl lg:gap-10
        ">
            <ProfileImage />
            <Name />
            <AboutText />
        </section>
    )
}

export default Profile