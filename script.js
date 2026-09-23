const binary_wrapper = document.getElementById("binary-wrapper");
const NUM_LINES = 8; //number of binary text lines

// Hello World!, Welcome, Wynn Musselman
const binary_options = ["01001000 01100101 01101100 01101100", "01010111 01100101 01101100 01100011", "01010111 01111001 01101110 01101110"];
const color_options = ["green", "darkgreen", "greenyellow"]

// picks a random number 0-2 for both the binary string and color option arrays
function get_rand_number(){
    let rand_num = Math.floor(Math.random() * 3);
    return rand_num;
}

function create_binary_str(){
    for (let i = 0; i < NUM_LINES; i++){
        const binary_str = document.createElement("p");
        binary_str.className = "binary-line";

        binary_str.textContent = binary_options[get_rand_number()];
        binary_str.style.color = color_options[get_rand_number()];

        binary_str.style.top = `${Math.floor(Math.random() * 20)}vh`;
        binary_str.style.animationDuration = `${Math.floor(Math.random() * 40) + 20}s`;
        binary_str.style.zIndex = -1;
        binary_wrapper.appendChild(binary_str);
    }
}
create_binary_str();