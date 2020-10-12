window.onload = function(){

    let editable_item;
        document.getElementById("submit").onclick = function(){

                let value = document.getElementById("text").value;

                if(value!= "" && this.value == "Submit"){

                    document.getElementById("text").value ="";
               let para = document.createElement("P");
               let txtnode = document.createTextNode(value);

               let edit_icon = document.createElement("SPAN");
           edit_icon.innerHTML ='<i class="fa fa-edit"></i>';

           let delete_icon = document.createElement("SPAN");
           delete_icon.innerHTML='<i class="fa fa-trash"></i>';

               para.appendChild(txtnode);
            edit_icon.setAttribute("class","edit");

            delete_icon.setAttribute("class","delete");

            delete_icon.addEventListener("click",remove_item);

            para.appendChild(delete_icon);

            edit_icon.addEventListener("click",edit_item);

            para.appendChild(edit_icon);
           

            para.setAttribute("class","items");

           // document.getElementById("container").innerHTML += para.innerHTML
           let container =  document.getElementById("container");

          container.insertBefore(para,container.lastElementChild);

          container.lastElementChild.style.display = "block"

          document.getElementById("added").style.display ="block";

          setTimeout(function(){
            document.getElementById("added").style.display ="none";

          },1000);
        
        }
        if(this.value == "Edit"){

            let edited_value = document.getElementById("text").value;

            editable_item.firstChild.nodeValue  = edited_value;
            this.value = "Submit";

            document.getElementById("value_changed").style.display ="block";

            document.getElementById("text").value = "";

            setTimeout(function(){
            document.getElementById("value_changed").style.display ="none";

            },1000);




        }

        }

        document.getElementById("container").lastElementChild.onclick = function(){


           let items =  document.querySelectorAll(".items");

           items.forEach(elm => elm.remove());

           document.getElementById("empty").style.display ="block";
           let that = this;

            setTimeout(function(){

            document.getElementById("empty").style.display ="none";
            that.style.display = "none";
           },1000);

           
        }

       
        function remove_item(){
            console.log("clicked")

            this.parentNode.remove();

            document.getElementById("item_removed").style.display ="block";

          setTimeout(function(){
            document.getElementById("item_removed").style.display ="none";

          },1000);

          let previous_sibling =  document.getElementById("clear").previousElementSibling;

          if(!previous_sibling.classList.contains("items")){

            document.getElementById("clear").style.display ="none";

          }
        }

        function edit_item(){

            document.getElementById("submit").value = "Edit";

            document.getElementById("text").value = this.parentNode.textContent;

           
            editable_item = this.parentNode;







        }





}
