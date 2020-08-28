const ListMaker = ({toys, donate, like}) => {
    return(
      <div id="toy-collection">
        {toys.map( toy => <div><ToyCard like={like} donateMe={donate} toy={toy}/></div>)}
      </div>
    );
  }