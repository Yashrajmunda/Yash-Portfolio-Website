

/*=============== SKILLS TABS ===============*/

const tabs = document.querySelectorAll('[data-target]'),
         tabContent = document.querySelectorAll('[data-content]')


         tabs.forEach(tab =>{
            tab.addEventListener("click", () => {
                const target = document.querySelector(tab.dataset.target)

                tabContent.forEach(tabContents => {
                    tabContents.classList.remove('skills_active')
                })

                target.classList.add('skills_active')  
                
                
                tabs.forEach(tab => {
                    tab.classList.remove("skills_active")
              })

                tab.classList.add('skills_active')  
            })
         })







/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll",navHighlighter);
function navHighlighter()
{
    let scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute("id");


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-links")
        } 
        else   
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-links")
        }  
        
    })
}

/*===== Work Popup =====*/


document.addEventListener("click" , (e) =>{
    if(e.target.classList.contains("services_button")){
        toggleServicesPopup();
        servicesItemDetails(e.target.parentElement)
    }
})


function toggleServicesPopup(){
    document.querySelector(".services_popup").classList.toggle("open");
}

document.querySelector(".services_popup-close").addEventListener("click",toggleServicesPopup)

// function servicesItemDetails(servicesItem){
//     document.querySelector(".pp_thumbnail img").src = servicesItem.querySelector("services_img").src;
// }

const demo = document.getElementsByClassName("services_button");





