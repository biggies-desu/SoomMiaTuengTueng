const Randomshit = () => {

    function rollwaifu(){
        console.log("เข้าฟังก์ชั่น Rollwaifu แล้ว")
        randomnumber_generate() //call randomnumber_generate
    }
    function randomnumber_generate(){
        console.log("เข้าฟังก์ชั่น randomnumber_generate แล้ว")
        let randomnumber = Math.floor(Math.random() * 1000); //random number 1-999
        document.getElementById("randomnumber_generate").innerHTML = randomnumber
        console.log(randomnumber)
    }

    return <div>
                <div className="randomshit">
                    <div className="center">
                        {/* onclick call rollwaifu function*/}
                        <button onClick={rollwaifu}>สุ่มเมีย</button>
                        <h2><p id = 'randomnumber_generate'></p></h2>
                    </div>
                    <div className="bottom-right">
                        {/* onclick call rollwaifu function*/}
                        <button ><a href="https://github.com/biggies-desu">กิตฮัพกุครับ</a></button>
                        <button ><a href="https://github.com/biggies-desu">กิตฮัพ ไอเหี้ยบูส</a></button>
                    </div>
                </div>      
            </div>
};

export default Randomshit;