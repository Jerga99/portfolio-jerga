import { Button } from 'reactstrap';


const ControllMenu = (props) => {

  return (
    <div className="controll-menu">
      <h1 className="title"> Write Your Story... </h1>
      <div className="status-box">
        { props.isLoading ? 'Saving...' : 'Saved'}
      </div>
      <Button disabled={props.isLoading} onClick={props.save} color="success">Save</Button>
    </div>
  )
}


export default ControllMenu;
