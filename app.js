fetch('https://codeforces.com/api/contest.list?gym=false')
    .then(data => data.json())
    .then(apiData => {
        const list = [];
        apiData.result.forEach(element => {
            if(element.phase==="BEFORE"){
                list.push(element);
                if(list.length>3) list.shift();
            }
            else 
            {
                return;
            }
        });

        for(var i=list.length-1;i>=0;i--)
        {
            document.getElementsByClassName("preloader")[0].style.display = "none";
            add_element(list[i]);
        }
    });

    function add_element(item) {
        const time = new Date(item.startTimeSeconds*1000);

        const list_heading = document.createElement("h2");
        const heading_text = document.createTextNode(item.name);
        list_heading.appendChild(heading_text);

        const list_element = document.createElement("p");
        list_element.className = "list_item";
        const list_text = document.createTextNode(time);
        list_element.appendChild(list_text);

        const item_container = document.createElement("div");
        item_container.appendChild(list_heading);
        item_container.appendChild(list_element);
        item_container.className = "list";

        console.log(list_element);
        console.log(list_heading);
        console.log(item_container)

        document.getElementById("container").appendChild(item_container);



    }