window.onload = async function () {
    let discordProfileIcon = document.querySelector("#discord-profile-icon");
    let discordProfile = document.querySelector("#discord-profile");
    let profilePicture = document.querySelector("#profilePicture");
    let profileBanner = document.querySelector('#profileBanner');
    const dialog = document.querySelector('#dialog-working');
    const dialogButton = document.querySelector('#dialog-button');

    const alertPopupStatus = localStorage.getItem("alertPopup");
    if (alertPopupStatus === "True") {
        dialog.remove();
    }
    dialogButton.addEventListener('click', () => {
        localStorage.setItem("alertPopup", "True");
        dialog.remove();
    });
    fetch('https://discordlookup.mesalytic.moe/v1/user/923625254943875112').then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        profilePicture.src = data.avatar.link;
        if (data.banner.link)
            profileBanner.style.backgroundImage = `url(${data.banner.link})`;
        else
            profileBanner.style.backgroundImage = "url(../public/assets/images/banner2.jpg)";
    });

    discordProfileIcon.addEventListener('click', () => {
        discordProfile.classList.toggle('hidden');
        discordProfile.classList.toggle('opacity-0');
    });

}