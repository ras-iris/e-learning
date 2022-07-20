# Documentation des composants et des hooks

## TextInput

Props:

```jsx
<TextInput
  errorMessage?: string;
  handler: Function;
  name: string;
  placeHolder: string;
  Icon: IconType; // react-icons
  value: string;
  type: string;
  required?: boolean
  ref?: any // react ref
/>
```

Exemple:

```jsx
<TextInput
  errorMessage="Le nom d'utilisateur saisie n'existe pas"
  handler={handleInputChange}
  placeHolder="Nom d'utilisateur"
  name="username"
  Icon={FaUser}
  value={userLoginInfo.username}
  type="text"
/>
```

## Button

Props:

```jsx
<Button
  Icon?: IconType;
  iconPosition?: "left" | "right";
  onClick: Function | null;
  text: string;
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "purple"
/>
```

Exemple:

```jsx
<Button Icon={FaGoogle} text="Se connecter avec Google" onClick={null} />
```

## useLoginAPI

handle form, inputs events

```ts
return {
  userLoginInfo: userLoginInfoType,
  handleSubmit: Funtion(e: ReFormEvent<HTMLFormElement>):void,
  handleInputChange: Function (e: ReChangeEvent<HTMLInputElement>):void
}
```
