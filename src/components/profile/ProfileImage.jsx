function ProfileImage() {
    return (
        <img 
            src={"/assets/Profilbild.png"}
            alt="Profileimage"
            className="
                w-40 h-40 
                rounded-sm
                object-cover 
                mb-4 
                md:mb-0 md:w-40 md:h-40
                transition duration-300
            "/>
    )
}

export default ProfileImage