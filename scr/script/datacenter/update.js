
$(document).ready(()=>{
    $('#filterButton').click(() =>{
        const filter ={}
        let itemIDSmall = $('#itemId').val()
        filter.itemID = itemIDSmall.toUpperCase()
        console.log(filter.itemID)
        // filter.itemID = "MIL500S";
        // filter.itemName = $('#itemName').val();
        // filter.category = $('#category').val();

        // console.log(filter)
        $.ajax({
            type: "POST",
            data: JSON.stringify(filter),
            contentType:"application/JSON",
            url:"http://localhost:5099/api/update",
            success: data => {
                console.log(data)
            }
        })
    });
})