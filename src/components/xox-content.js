export default function XoxContent(props){
    const rowCount = [0,0,0];
    const columnCount = [0,0,0];

    const generateCells = (rowIndex)=>{
        const cells = columnCount.map((data,index)=>{
            let url = "./"+props.position[rowIndex+""+index]+".jpg";
                return( <>
                <td id={rowIndex+''+index} onClick={(e)=>{props.clickFn(e,rowIndex,index)}}>
                    <img src={url} width={150}></img></td>
                </>
                )
            })
    
            return cells;
        }

    const onClicktdClick = ()=>{
        console.log("clicked")
    }

    const generateRows = ()=>{
        const rows = rowCount.map((data,index)=>{
   return ( <tr>
{generateCells(index)}
    </tr>
   )
})
console.log(rows);
return rows;
    }

      

    return (
<>
{generateRows()}
</>
    )
}