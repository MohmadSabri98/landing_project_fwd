
/**
 * Define Global Variables
 * 
*/

let toggle_menu=true;
let sections=document.querySelectorAll("section");
let numofsections=sections.length;
let init=1;
let scrrolled_header_viewing;

// add section function to add the section structure with the it's id
let addsection=(Section_Number) =>{
let sectionelment=document.createElement("section");
let section_div_elem=document.createElement("div");
let h2_section_text=document.createTextNode(`section ${Section_Number}`);
let h2_section_elem=document.createElement("h2");
h2_section_elem.appendChild(h2_section_text);
let first_p_section_text=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.");
let first_p_section_elem=document.createElement("p");
first_p_section_elem.appendChild(first_p_section_text);
let second_p_section_text=document.createTextNode("Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.");
let second_p_section_elem=document.createElement("p");
second_p_section_elem.appendChild(second_p_section_text);
section_div_elem.appendChild(h2_section_elem);
section_div_elem.appendChild(first_p_section_elem);
section_div_elem.appendChild(second_p_section_elem);
section_div_elem.classList.add("landing__container");
sectionelment.appendChild(section_div_elem);
sectionelment.id=`section${Section_Number}`;
sectionelment.setAttribute('data-nav',`Section ${Section_Number}`);

document.getElementsByTagName("main")[0].appendChild(sectionelment);
// sectionelment.scrollIntoView();
};
//create the links corresponding to the sections
let add_linkTo_newsection=(idanchor)=>{let links_container=document.getElementById("navbar__list");
let created_linksection=document.createElement("li");
created_linksection.innerHTML=`<div >
<a href="#section${idanchor}" id="${idanchor}" class="menu__link "> Section ${idanchor}</a></div>`;
links_container.appendChild(created_linksection);
}

///////////////////////////
/////////////////Main
// build the the sections
for(let x=0;x<(numofsections===0?4:numofsections);x++){

addsection(init);
add_linkTo_newsection(init);
init++;

}

// create section button 
let addsection_button=document.getElementsByClassName('addsectionptn');
addsection_button[0].addEventListener('click',()=>{
    addsection(init);
    add_linkTo_newsection(init);
    init++;

});




// Section Active State function being viewed while scrolling through the page.
// to top dtn functionality
//Hide fixed navigation bar while not scrolling
window.onscroll = function() {
	let dfd=document.querySelectorAll("section");dfd.forEach((active)=> {
        let selectedLink = document.querySelector(`[href="#${active.id}"]`);
        if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

            active.classList.add("your-active-class");
            selectedLink .classList.add("activelinkclass");
        
        }
            else{
                 active.classList.remove("your-active-class");
                 selectedLink .classList.remove("activelinkclass");
            }
	});
    //Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page
    window.scrollY>600 ? (totop_button[0].style.backgroundColor='red',totop_button[0].style.display='block'):(totop_button[0].style.backgroundColor='green',totop_button[0].style.display='none');
    //Hide fixed navigation bar while not scrolling
    document.getElementsByClassName("navbar__menu")[0].style.display="block";
    clearTimeout(scrrolled_header_viewing);
   scrrolled_header_viewing= setTimeout(() => {
       document.getElementsByClassName("navbar__menu")[0].style.display="none"; 
    }, 5000);
    
}




// to top button scroll smooth
let totop_button=document.getElementsByClassName('totop');
totop_button[0].addEventListener('click',()=>{
    

window.scroll({
    top: 0,
    left:0,
    behavior: 'smooth'
  });
});


// Responsive navigation menu and add sec button
let nav_bar_icon=document.getElementsByClassName("icon")[0].addEventListener('click',()=>{
   
    document.getElementById("navbar__list").classList.toggle("resposive");
     document.getElementById("navbar__list").classList.toggle("tofirst");
     document.getElementById("addsec").classList.toggle("respobtn");
     document.getElementById("addsec").classList.toggle("addsectionptn");

     

});





