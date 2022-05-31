let courses=[
    {
        id:1,
        image:"https://images.unsplash.com/photo-1560421683-6856ea585c78?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0ZSUyMGRlJTIwbG9zJTIwbmklQzMlQjFvc3xlbnwwfHwwfHw%3D&w=1000",
        title: "Arte",
        trabajo: "titulo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas nisl vitae efficitur tincidunt.",
        utilities: "Comments y envio"
    },
    {
        id:2,
        image:"https://images.unsplash.com/photo-1633828763399-e29f1cd3f4c1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074",
        title: "Ciencia",
        trabajo: "titulo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas nisl vitae efficitur tincidunt.",
        utilities: "Comments y envio"
    },
    {
        id:3,
        image:"https://images.unsplash.com/photo-1601397922721-4326ae07bbc5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171",
        title: "Matemáticas",
        trabajo: "titulo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas nisl vitae efficitur tincidunt.",
        utilities: "Comments y envio"
    },
    {
        id:4,
        image:"https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "Ingenieria",
        trabajo: "titulo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas nisl vitae efficitur tincidunt.",
        utilities: "Comments y envio"
    },
    {
        id:5,
        image:"https://images.unsplash.com/photo-1548125119-57853b9b0f07?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
        title: "Tecnología",
        trabajo: "titulo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas nisl vitae efficitur tincidunt.",
        utilities: "Comments y envio"
    }
]


export function getAllCourses(){
    return courses;
}

export function getCourse(id){
    return courses.find((s)=>s.id===id);//El elmento se llama asi misma, para cada elemento s=studie va tener un nombre interno llamado job, lo que interesa es que debe coincidir con el id de la funcion
}