# Client Inspector

[![npm version](https://img.shields.io/npm/v/client-inspector)](https://www.npmjs.com/package/client-inspector)
[![GitHub license](https://img.shields.io/github/license/gpraj-works/client-inspector)](https://github.com/gpraj-works/client-inspector/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/gpraj-works/client-inspector?style=social)](https://github.com/gpraj-works/client-inspector)

**Client Inspector** is a lightweight TypeScript library that helps fetch and analyze client-side information such as browser details, operating system, and device specifications. It works seamlessly with React, Angular, Vue, and plain JavaScript/HTML environments.

---

## 🚀 Installation

Install **client-inspector** using npm or yarn:

```sh
npm install client-inspector
```

```sh
yarn add client-inspector
```

---

## 📌 Usage

### 📥 Importing

```ts
import clientInspector, { ClientInspector } from "client-inspector";
```

- `clientInspector` is the default export and returns a promise resolving to client details.
- `ClientInspector` is the TypeScript type for the response.

### ⚛️ Example Usage in React (TypeScript)

```tsx
import { useEffect, useState } from 'react';
import clientInspector, { ClientInspector } from "client-inspector";

function App() {
  const [data, setData] = useState<ClientInspector | null>(null);

  useEffect(() => {
    (async () => {
      setData(await clientInspector());
    })();
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default App;
```

### 🌐 Usage in JavaScript (HTML)

```html
<script type="module">
  import clientInspector from "https://cdn.jsdelivr.net/npm/client-inspector/dist/index.js";

  (async () => {
    const clientData = await clientInspector();
    console.log(clientData);
  })();
</script>
```

### 🖼️ Example Usage in Vue

```vue
<script setup>
import { ref, onMounted } from 'vue';
import clientInspector from "client-inspector";

const clientData = ref(null);

onMounted(async () => {
  clientData.value = await clientInspector();
});
</script>

<template>
  <pre>{{ clientData }}</pre>
</template>
```

### 🅰️ Example Usage in AngularJS

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script type="module">
    import clientInspector from "https://cdn.jsdelivr.net/npm/client-inspector/dist/index.js";
    angular.module("myApp", []).controller("MainCtrl", function($scope) {
      clientInspector().then(data => {
        $scope.clientData = data;
        $scope.$apply();
      });
    });
  </script>
</head>
<body ng-controller="MainCtrl">
  <pre>{{ clientData | json }}</pre>
</body>
</html>
```

---

## 🤝 Contribution

Contributions are welcome! If you'd like to improve **Client Inspector**, please follow these steps:

1. **Fork** the repository on [GitHub](https://github.com/gpraj-works/client-inspector).
2. **Create** a new branch for your feature or bug fix.
3. **Commit** your changes and push them to your fork.
4. **Open** a pull request detailing your changes.

For any questions or discussions, feel free to open an issue.

---

## 📂 Repository

[GitHub Repository](https://github.com/gpraj-works/client-inspector)

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/gpraj-works/client-inspector/blob/main/LICENSE) file for more details.

