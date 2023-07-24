import useInputs from "./useInputs";

const Info = () => {
    const [state, onChange] = useInputs({
        name: "",
        nickname: "",
    });
    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input name="name" onChange={onChange} />
                <input name="nickname" onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>name :</b> {name}
                </div>
                <div>
                    <b>nickname :</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
