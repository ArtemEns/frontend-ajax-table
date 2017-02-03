
function renderRow(item) {
    return $(`<tr>
        <td><img src ="${item.picture}" width=32 height=32></td>
        <td>${item.name.first} ${item.name.last}</td>
        <td>${item.isActive}</td>
        <td>${item.about}</td>
        <td>${item.balance}</td>
        <td>${item.age}</td>
        <td>${item.registered}</td>
        <td>${item.company}</td>
        <td><a href="mailto:${item.email}">${item.email}</a></td>
        <td><a href="tel:${item.phone}"> ${item.phone}</a></td>
        <td>${item.address}</td>
         </tr>`)
}


module.exports = renderRow;