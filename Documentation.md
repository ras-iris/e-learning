# Documentation des composants et des hooks

## TextInput

Props:

    TextInputProps = {
      label: string;
      name: string;
      placeHolder: string;
      errorMessage: string;
      InputIcon: IconType; // react-icons
      value: string;
      type: string;
      handler: Function;
    }

Exemple:

    <TextInput
      label="Nom d'utilisateur"
      placeHolder="Nom d'utilisateur"
      errorMessage="Le nom d'utilisateur saisie n'existe pas"
      name="username"
      InputIcon={FaUser}
      handler={handleInputChange}
      value={userLoginInfo.username}
      type="text"
    />

## Button

Props:

    <Button
      text: string;
      type: "button" | "submit" | "reset" | undefined;
      className: string;
      onClick: Function | null;
    />

Exemple:

    <Button
      text="Se connecter"
      onClick={null}
      type="submit"
      className=""
    />

## useLoginAPI

handle form, inputs events

        return {
            userLoginInfo: userLoginInfoType,
            handleSubmit: Funtion(e: React.FormEvent<HTMLFormElement>),
            handleInputChange: Function (e: React.ChangeEvent<HTMLInputElement>)
        }
