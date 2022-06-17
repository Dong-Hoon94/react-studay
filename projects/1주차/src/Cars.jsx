function Cars(props) {
    console.log(props.data)
    return(
    <section>
      <ul>
        {
            props.data.map(car => (
                <li>
                    <span>번호 {car.idx}</span>
                    <span>년도 {car.year}</span>
                    <span>차종 {car.car}</span>
                    <span>개월수 {car.yd}</span>
                </li>
            ))
        }
      </ul>
    </section>
       
        )
    }
    export default Cars;