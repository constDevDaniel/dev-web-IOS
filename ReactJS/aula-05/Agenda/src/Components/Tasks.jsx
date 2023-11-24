import TaskItem from "./TaksItem";
import PropTypes from "prop-types";


const Tasks = ({ tasks }) => {
	return (
		<>
			{tasks.map((task) => (
				<TaskItem key={task.id} task={task} />
			))}
		</>
	);
};

Tasks.propTypes = {
	id: PropTypes.number,
	tasks: PropTypes.array,
}

export default Tasks;
