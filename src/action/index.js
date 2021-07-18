// action creator



export const GetData= ()=>{
    const data = [
        {
            id:1,
            nama: "Otong",
            jurusan: "Teknik Informatika",
            IPK: 2.3
        },
        {
            id:2,
            nama: "ucup",
            jurusan: "Teknik Informatika",
            IPK: 2.5
        },
        {
            id:3,
            nama: "Udin",
            jurusan: "Teknik Fisika",
            IPK: 2.1
        },{
            id:4,
            nama: "Romlah",
            jurusan: "Teknik Industri",
            IPK: 2.7
        },
    ]
   return {
       type: "GET_DATA",
        data: data
    } 
}

export const ChoiceData = (mhs)=>{
    return {
        type: "CHOICE_DATA",
        data: mhs
    }
}