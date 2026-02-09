function ProfileImage() {
    return (
        <img 
            src="/assets/Profilbild.png"
            alt="Profileimage"
            className="
                w-40 h-40 
                rounded-full 
                object-cover 
                mb-4 
                md:mb-0 md:w-50 md:h-50
                lg:transition lg:duration-300 lg:hover:scale-[1.02] lg:hover:shadow-lg
            "/>
    )
}

export default ProfileImage