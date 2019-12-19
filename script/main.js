"use strict"

//vars

let sign_in_form_button = document.getElementById("sign_in_form_button")
let close_sign_in_form = document.getElementById("close_sign_in_form") 
let sign_up_form_button = document.getElementById("sign_up_form_button")
let close_sign_up_form = document.getElementById("close_sign_up_form")
let search_button = document.getElementById("search_button")
let close_search_form = document.getElementById("close_search_form")
let edit_profile_submit_button = document.getElementById("edit_profile_submit_button")
let open_review_box= document.getElementById("open_review_box")
let close_review_box = document.getElementById("close_review_box")
let username_tile = document.getElementById("username_tile")
let toggle_image_fullscreen = document.getElementById("toggle_image_fullscreen")
let search_input = document.getElementById("search_input")
let get_city_by_country = document.getElementById("get_city_by_country")
/* --------- MENU UTILS ------------ */
/**
 * open sign in form
 */
if(sign_in_form_button != null){
    
    sign_in_form_button.onclick = function(e){
        let form = document.getElementById("sign_in_form")
        form.style.display = "block"
    }    
}

/**
 *  close sign in form 
 */
if(close_sign_in_form != null){
   
    close_sign_in_form.onclick = function(e){
        let form = document.getElementById("sign_in_form")
        form.style.display = "none"
    }  
}
/**
 * open sign up form 
 */
if(sign_up_form_button != null){
    sign_up_form_button.onclick = function(e){
        let form = document.getElementById("sign_up_form")
        form.style.display = "block"
    }
}

/**
 *  close sign up form
 */
if(close_sign_up_form  != null){
    close_sign_up_form .onclick = function(e){
        let form = document.getElementById("sign_up_form")
        form.style.display = "none"
    }  
}

/**
 *  toggle search bar
 */
if(search_button != null){
    search_button.onclick = function(e){
        let form = document.getElementById("search_form")
    
        if (form.style.display == "flex"){
            form.style.display = "none"
        }
        else{
            form.style.display = "flex"
        }
    }
}
/**
 * close search bar form 
 */
if(close_search_form != null)
    close_search_form.onclick = function(e){
    let form = document.getElementById("search_form")
    form.style.display = "none"
}
/**
 * 
 */
if(open_review_box != null){
    open_review_box.onclick = function(event){  
        let box = event.target.nextElementSibling
    
        box.style.display = "flex"
    }
}
/**
 * 
 */
if(close_review_box != null){
    close_review_box.onclick = function(event) {
        let box = event.target.parentElement.parentElement
        box.style.display = "none"
    }
}

/**
 * 
 */
username_tile.onclick = function(e) {
    let menu = document.getElementsByClassName("user_menu_option")

    for (let i = 0; i < menu.length; i++) {
        if (menu[i].style.display == "block")
            menu[i].style.display = "none"
        else
            menu[i].style.display = "block"
    }
}
/**
 * 
 */
if(edit_profile_submit_button != null){
    edit_profile_submit_button.onclick = function(e){
        let input_pass = document.getElementById("password")
        let confirm = document.getElementById("confirm_password")
        if(input_pass.value.length != ""){
            confirm.required =true
        }else confirm.required =false
        
        if(input_pass.value != confirm.value){
            alert('dont match')
        }
    }
}


//  Place Gallery - a slider to display multiple images
let slideIndex = 1
let fullscreen = false
showDivs(slideIndex)

function plusDivs(n) {
    showDivs(slideIndex += n)
}

function showDivs(n) {

    let images = document.getElementsByClassName("image_slide")
    let originals = document.getElementsByClassName("fullscreen_slide")

    if (n > images.length)
        slideIndex = 1

    if (n < 1)
        slideIndex = images.length

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none"
        originals[i].style.display = "none"
    }

    if (images.length) {
        if (fullscreen) 
            originals[slideIndex - 1].style.display = "block"
        else
            images[slideIndex - 1].style.display = "block"
    }
}
if(toggle_image_fullscreen != null){
    toggle_image_fullscreen.onclick =  function(event){
        fullscreen = (!fullscreen)
    
        let place_gallery = document.getElementById("place_gallery")
        //let image_container = document.getElementById("image_container")
        let fullscreen_icon = place_gallery.querySelector(".material-icons")
    
        if (fullscreen) {
            place_gallery.style.position = "fixed"
            place_gallery.style.left = "0"
            place_gallery.style.top = "0"
            place_gallery.style.width = "100vw"
            place_gallery.style.height = "100vh"
            place_gallery.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
            
            image_container.style.maxWidth = "80%"
            image_container.style.maxHeight = "50vw"
    
            fullscreen_icon.innerHTML = "fullscreen_exit"
        }
        else {
            place_gallery.style.position = "static"
            place_gallery.style.width = "auto"
            place_gallery.style.height = "auto"
            place_gallery.style.backgroundColor = "transparent"
    
            image_container.style.maxWidth = "max-content"
            image_container.style.maxHeight = "max-content" 
    
            fullscreen_icon.innerHTML = "fullscreen"
        }
    
        showDivs(slideIndex)
    }
}
//::::: AJAX STUFF ::::::://

function encodeForAjax(data) {
    return Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}
/*------ Search Bar ----*/

/**
 * 
 * @param {*} event 
 */
if(search_button != null){
    search_input.onkeyup = function(e) {
        let options = document.getElementById("search_suggestions")
        console.log(options);
      
        //switch n funcionou n sei pq...
        if (e.keyCode == '38') {
            console.log('up')
        }
        if (e.keyCode == '40') {
            console.log('down')
        }
        if (e.keyCode == '27') { //clear
            options.innerHTML=""
            document.getElementById("search_input").value=""
        }
    
    }
}
/**
 * 
 * @param {*} event 
 */
if(get_city_by_country != null){
    get_city_by_country.oninput = function(event) {

        let country_id_selected = event.target
        let current_country = country_id_selected.options[country_id_selected.selectedIndex].value
    
        let request = new XMLHttpRequest()
        request.addEventListener("load", function () {
            cities_received(event.target, this)
        })
        request.open("get", "../ajax/get_cities.php?country_id=" + current_country, true)
        request.send()
    }
}

/**
 * 
 * @param {*} country_select_element 
 * @param {*} obj 
 */
function cities_received(country_select_element, obj) {
    let cities = JSON.parse(obj.responseText)

    let common_acestor_id = ""
    let city_selects = document.getElementsByClassName("city_select")
    for (let i = 0; i < city_selects.length; i++) {
        let element = find_first_common_ancestor(country_select_element, city_selects[i])
        if (element.id != "site_container") {
            common_acestor_id = element.id
            break
        }
    }

    let list = document.querySelector("#" + common_acestor_id + " .city_select")
    list.innerHTML = "" // Clean current cities

    // Add new suggestions
    cities.forEach((city) => {
        let item = document.createElement("option")
        item.value = city.city_id
        item.innerHTML = city.city_name
        list.appendChild(item)
    })
}

/* ---- SELECT DATE FOR SEARCH BAR ----- */

let search_picker = new Litepicker({
    element: document.getElementById('search_check_in'),
    elementEnd: document.getElementById('search_check_out'),
    singleMode: false,
    minDate: new Date().getTime(),
    hotelMode: true,
    format: "D - MMM - YYYY",
    startDate: search_check_in,
    endDate: search_check_out,
    numberOfMonths: 1,
    numberOfColumns: 1,
    disallowLockDaysInRange: true
 })

let text = document.getElementById("search_input")
text.addEventListener("keyup", country_city_changed)

function country_city_changed(event) {

    let text = event.target
    let request = new XMLHttpRequest()

    request.addEventListener("load", countries_received)
    if (text.value != "")
        request.open("get", "../ajax/search.php?name=" + text.value, true)
    else (document.getElementById("search_suggestions").innerHTML = "")
    request.send()
}

// Handler for ajax response received
function countries_received() {

    let countries = JSON.parse(this.responseText)
    let list = document.getElementById("search_suggestions")
    list.innerHTML = ""; // Clean current countries
    // Add new suggestions
    for (let country in countries) {
        //console.log(country)
        if (countries[country].city_name == null) {
            let item = document.createElement("li")
            item.id = "result_suggestions" //css 
            item.innerHTML = countries[country].country_name
            //item.addEventListener("click", fill_search_bar(countries[country].country_name));
            item.addEventListener("click", function () {
                document.getElementById("search_input").value = countries[country].country_name
                document.getElementById("search_suggestions").innerHTML = ""
            });
            list.appendChild(item)
        }
        if (countries[country].city_name != null) {
            let item = document.createElement("li")
            item.id = "result_suggestions" //css 
            item.innerHTML = countries[country].country_name + ', ' + countries[country].city_name
            item.addEventListener("click", function () {
                document.getElementById("search_input").value = countries[country].country_name + ', ' + countries[country].city_name
                document.getElementById("search_suggestions").innerHTML = ""
            });
            list.appendChild(item)
        }
    }
}
/**
 * 
 * @param {*} node_a 
 * @param {*} node_b
 * @param {*} ancestors_b 
 */
function find_first_common_ancestor(node_a, node_b, ancestors_b) {
    var ancestors_b = ancestors_b || get_ancestors(node_b);
    if (ancestors_b.length == 0) return null;
    else if (ancestors_b.indexOf(node_a) > -1) return node_a;
    else if (node_a == document) return null;
    else return find_first_common_ancestor(node_a.parentNode, node_b, ancestors_b);
}

/**
 * 
 * @param {*} node 
 */
function get_ancestors(node) {
    if (node != document) return [node].concat(get_ancestors(node.parentNode));
    else return [node];
}

//
if (Array.prototype.indexOf === undefined) {
    Array.prototype.indexOf = function (element) {
        for (var i = 0, l = this.length; i < l; i++) {
            if (this[i] == element) return i;
        }
        return -1;
    };
}

// PRICE

let min_price = document.getElementById("min_price_input")
let max_price = document.getElementById("max_price_input")

min_price.oninput = update_price
max_price.oninput = update_price

function update_price() {
    let min_price_input = parseFloat(min_price.value)
    let max_price_input = parseFloat(max_price.value)

    let min_price_value = document.getElementById("min_price_value")
    let max_price_value = document.getElementById("max_price_value")

    min_price_value.innerHTML = "" + min_price_input + "€"
    max_price_value.innerHTML = "" + max_price_input + "€"

}

/**
 * 
 * @param {*} price_per_night 
 */
function calculate_rent_price(price_per_night) {

    let check_in = document.getElementById("check_in_value")
    let check_out = document.getElementById("check_out_value")
    let num_guests = document.querySelector("#place_page #num_guests_input input")

    //One of the inputs required was not defined yet
    if (check_in.value.length == 0 || check_out.value.length == 0 || num_guests.value.length == 0) {
        return
    }

    // Calculation of number of days
    let check_in_value = new Date(check_in.value)
    let check_out_value = new Date(check_out.value)
    let diff = Math.abs(check_out_value.getTime() - check_in_value.getTime())
    let num_days = Math.ceil(diff / (1000 * 3600 * 24))

    let final_price = num_days * price_per_night * num_guests.value

    //Add final price to rent section
    let rent_section = document.getElementById("rent_section")

    // Get price tag div inside rent section
    let price_tag = document.getElementById("price_tag")

    //Price tag does not exist yet 
    if (price_tag == null) {

        //Price tag
        price_tag = document.createElement("div")
        price_tag.id = "price_tag"

        //Price title
        let price_title = document.createElement("h3")
        price_title.id = "price_title"
        price_title.innerHTML = "Price"

        //Price value
        let price_value = document.createElement("h2")
        price_value.id = "price_value"
        price_value.innerHTML = final_price + "€"

        price_tag.appendChild(price_title)
        price_tag.appendChild(price_value)
        rent_section.appendChild(price_tag)
    } else {
        //Price was previsouly calculated. Just need to change its value
        let price_value = document.getElementById("price_value")
        price_value.innerHTML = final_price + "€"
    }
}

/**
 * 
 * @param {*} event 
 * @param {*} number 
 */
function update_guests(event, number) {
    let num_guests

    if (number < 0)
        num_guests = event.target.nextElementSibling
    else
        num_guests = event.target.previousElementSibling

    num_guests.value = +num_guests.value + number

    if (+num_guests.value < +num_guests.min)
        num_guests.value = num_guests.min
    else if (+num_guests.value > +num_guests.max)
        num_guests.value = num_guests.max
}
/**
 * 
 * @param {*} event 
 */
function toggle_checkbox(event) {
    let checkbox = event.target
    let checkmark = event.target.nextElementSibling

    console.log(checkbox.checked)
    
    if (checkbox.checked) {
        checkmark.style.visibility = "visible"
    } 
    else {
        checkmark.style.visibility = "hidden"
    }
        
}

/* TAGS */

/* tags_checkboxes = document.querySelectorAll(".tag input")

tags_checkboxes.forEach(checkbox => {
    checkbox.onclick = (event) => toggle_checkbox(event)
}); */


 /**
 * password validation
 */
//todo
/*
let password = document.getElementById("password")
confirm_password = document.getElementById("confirm_password")

function validatePassword(){

  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match")
  } else {
    confirm_password.setCustomValidity('')
  }

}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
*/
 