import React from "react";

import useInputs from "../../Hooks/useInputs";

import ModalParticipant from "../Modal/ModalParticipant";
import CardList from "../CardList/CardList";
import Card from "../Card/Card";

const initialValue = {
    role: "",
    characterName: "",
    participantId: "",
};

const FormRoleList = ({ roles, setRoles, error }) => {
    const { inputs, setInputs, onChange } = useInputs(initialValue);

    const handleClickSave = () => {
        setRoles((state) => ({
            ...state,
            roles: [inputs, ...roles],
        }));

        setInputs(initialValue);
    };

    const handleClickDelete = (rowIdx) => {
        setRoles((state) => ({
            ...state,
            roles: state.roles.filter((item) => item.id !== rowIdx),
        }));
    };

    const handleClickRow = (item) => {
        setInputs((state) => ({
            ...state,
            ...item,
        }));
    };

    return (
        <CardList title="인물추가">
            <ModalParticipant
                selectedList={roles.map((item) => item.id)}
                inputs={inputs}
                onChange={onChange}
                onClickRow={handleClickRow}
                onClickSave={handleClickSave}
            />
            <br />
            {roles.map((item, idx) => (
                <Card
                    radius="50%"
                    key={idx}
                    item={item}
                    onClickDelete={handleClickDelete}
                />
            ))}
        </CardList>
    );
};

export default React.memo(FormRoleList);