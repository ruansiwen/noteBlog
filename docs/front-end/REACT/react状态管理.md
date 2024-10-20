---
category: REACT
---
# react状态管理入门

[zustand](https://link.zhihu.com/?target=https%3A//zustand-demo.pmnd.rs/) 和 [jotai](https://link.zhihu.com/?target=https%3A//jotai.org/) 是当下比较流行的react状态管理库。其都有着轻量、方便使用，和[react hooks](https://zhida.zhihu.com/search?q=react+hooks&zhida_source=entity&is_preview=1)能够很好的搭配，并且性能方面，对比React自身提供的context要好得多，因此被很多开发小伙伴所喜爱。并且两个库的作者是同一个人。

# 1. 什么是jotai

Jotai 是一个用于 React 的轻量级状态管理库，名字来源于日语中的 "状態" (Jōtai)，意思是“状态”。它的设计目标是提供一种简单、灵活且强大的方式来管理 React 应用中的状态，特别适合处理复杂的状态依赖关系。Jotai 的更新原理基于 React 的状态机制，但通过原子化管理状态，使得状态更新更加细粒度和高效。这样可以确保状态变化只会影响到实际依赖于这些状态的组件，从而优化性能并简化状态管理。

# 2. jotai的关键特性

原子化状态：Jotai 使用原子（atom）来表示独立的状态单元，每个 atom 都可以独立管理和更新。这样可以使状态管理更加模块化和细粒度。

简洁的 API：Jotai 提供了一个简洁易用的 API，通过 atom 和 useAtom 两个核心函数来创建和使用状态。

高性能：Jotai 的状态更新是基于依赖关系的，只有真正依赖某个 atom 的组件才会在该 atom 更新时重新渲染，从而优化性能。

支持复杂状态逻辑：Jotai 支持派生状态和异步状态，可以很方便地处理复杂的状态逻辑和异步操作。

与 React 完美集成：Jotai 设计上与 React 的 Hooks 系统紧密集成，使用体验非常自然和一致。

# 3. 简单入门

```js
import { atom, useAtom } from 'jotai';
const countAtom = atom(0);
const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

只需要创建一个countAtom原子态，然后在 `Counter` 组件中使用 `useAtom` 来读取和更新这个状态。

# 4. 进阶使用

## 4.1 简单依赖

```js
import { atom } from 'jotai';
 
const countAtom = atom(0);
const doubledCountAtom = atom((get) => get(countAtom) * 2);
```

由于每个 Atom 都是独立的状态单元，只有那些实际依赖于某个 Atom 的组件才会在这个 Atom 的值发生变化时重新渲染。这种细粒度的状态管理可以显著优化应用的性能，减少不必要的重新渲染。

## 4.2 derivedAtom

也可以使用 `derivedAtom`（派生原子）来处理这种情况：

`derivedAtom` 允许你根据其他原子的值计算出一个新的值。当它所依赖的原子发生变化时，派生原子也会自动更新，从而触发依赖于它的组件重新渲染。

```js
import { atom, useAtom, derivedAtom } from 'jotai';

const countAtom = atom(0);
const multiplierAtom = atom(2);

const derivedCountAtom = derivedAtom((get) => {
  const count = get(countAtom);
  const multiplier = get(multiplierAtom);
  return count * multiplier;
});

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  const [multiplier, setMultiplier] = useAtom(multiplierAtom);
  const derivedCount = useAtom(derivedCountAtom)[0];
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Multiplier: {multiplier}</p>
      <button onClick={() => setMultiplier(multiplier + 1)}>Increment Multiplier</button>
      <p>Derived Count: {derivedCount}</p>
    </div>
  );
};
```

## 4.3 异步使用

```js
import React from 'react';
import { atom, useAtom } from 'jotai';

const loadingAtom = atom(false);
const dataAtom = atom(null);

const fetchData = async () => {
  useAtom.setState([loadingAtom, true]);
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  useAtom.setState([dataAtom, data]);
  useAtom.setState([loadingAtom, false]);
};

const AsyncComponent = () => {
  const [loading, setLoading] = useAtom(loadingAtom);
  const [data, setData] = useAtom(dataAtom);

  return (
    <div>
      {loading? <p>Loading...</p> : data? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};
```

还可以结合immer来使用：

```js
import { atom, useAtom } from 'jotai';
import produce from 'immer';
const ComponentA = () => {
  const [user, setUser] = useAtom(userAtom);
  const handleChangeName = (e) => {
    setUser(produce(draft => {
      draft.name = e.target.value;
    }));
  };
  const handleChangeEmail = (e) => {
    setUser(produce(draft => {
      draft.email = e.target.value;
    }));
  };
  return (
    <div>
      <input type="text" value={user.name} onChange={handleChangeName} placeholder="Name" />
      <input type="text" value={user.email} onChange={handleChangeEmail} placeholder="Email" />
    </div>
  );
};
```

## 4.4. useStoreValue `和`useStoreActions

```js
import { atom, useAtom } from 'jotai';
const countAtom = atom(0);
const messageAtom = atom('Hello');
const store = {
  countAtom,
  messageAtom
};

其他组件：
import React from 'react';
import { useStoreValue, useStoreActions } from 'jotai';

const MyComponent = () => {
  const storeValue = useStoreValue((root) => ({
    count: root.countAtom,
    message: root.messageAtom
  }));

  const storeActions = useStoreActions((root) => ({
    incrementCount: () => root.countAtom.set(root.countAtom + 1),
    changeMessage: (newMessage) => root.messageAtom.set(newMessage)
  }));

  return (
    <div>
      <p>Count: {storeValue.count}</p>
      <button onClick={storeActions.incrementCount}>Increment Count</button>
      <p>Message: {storeValue.message}</p>
      <input
        type="text"
        value={storeValue.message}
        onChange={(e) => storeActions.changeMessage(e.target.value)}
      />
    </div>
  );
};
```

## 4.5 setAtom `和`getAtom

```js
import { atom, setAtom, getAtom } from 'jotai';

const myAtom = atom(10);

const MyOtherComponent = () => {
  const currentValue = getAtom(myAtom);
  console.log(currentValue); // 输出 10
  setAtom(myAtom, 20);
  const updatedValue = getAtom(myAtom);
  console.log(updatedValue); // 输出 20

  return <div>Some content</div>;
};
```

# 5. jotai的api

1. `atom`：

* 用于创建原子状态。可以接受初始值作为参数。例如：`const countAtom = atom(0);`。

2. `useAtom`：

* 在组件中使用原子状态。返回一个数组，包含当前原子状态的值和一个更新函数。例如：`const [count, setCount] = useAtom(countAtom);`。

3. `derivedAtom`：

* 创建派生原子状态。根据其他原子状态的值计算出新的值。例如：`const derivedCountAtom = derivedAtom((get) => get(countAtom) * 2);`。

4. `atomFamily`：

* 创建一个原子工厂，可以根据参数生成不同的原子状态。例如：`const dynamicCountAtom = atomFamily((initialValue) => atom(initialValue));`。然后可以使用 `const [count, setCount] = useAtom(dynamicCountAtom(5));` 创建一个初始值为 5 的特定原子状态。

5. `useStoreValue` 和 `useStoreActions`：

* `useStoreValue` 用于读取整个存储的状态值。
* `useStoreActions` 用于访问存储中的更新函数。

6. `setAtom` 和 `getAtom`：

* `setAtom` 用于直接设置原子状态的值。
* `getAtom` 用于获取原子状态的值。

7. `atomWithReset`：

* 创建一个带有重置功能的原子状态。可以通过调用特定的重置函数将原子状态恢复到初始值。




# 100. 什么是zustand



**主要特点包括：**

1. **简单易用**：Zustand 提供了简洁的 API，使得状态管理变得容易理解和实现。它不需要复杂的设置和配置，就可以快速地在项目中引入状态管理。
2. **可预测性**：状态的更新是可预测的，并且遵循函数式编程的原则。状态的变化是通过纯函数来进行的，这使得代码更容易调试和维护。
3. **可扩展性**：可以轻松地扩展和组合状态，以满足复杂应用的需求。可以创建多个状态切片，并将它们组合在一起，形成一个完整的状态管理方案。
4. **响应式更新**：当状态发生变化时，依赖于该状态的组件会自动重新渲染，实现了高效的响应式更新。
5. **支持 TypeScript**：Zustand 对 TypeScript 提供了良好的支持，可以在类型安全的环境中进行状态管理。

# 101. 简单入门

```js
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

const CounterComponent = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};


```


# 102. 进阶使用

## 102.1 **创建多个状态切片**

```js
import create from 'zustand';

// 计数器状态切片
const useCounterStore = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
});

// 用户信息状态切片
const useUserStore = (set) => ({
  username: '',
  setUsername: (name) => set({ username: name }),
});

const useCombinedStore = create((...a) => ({
 ...useCounterStore(...a),
 ...useUserStore(...a),
}));

const CounterComponent = () => {
  const count = useCombinedStore((state) => state.count);
  const increment = useCombinedStore((state) => state.increment);
  const decrement = useCombinedStore((state) => state.decrement);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const UserComponent = () => {
  const username = useCombinedStore((state) => state.username);
  const setUsername = useCombinedStore((state) => state.setUsername);

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
};
```

## 102.2 处理异步操作

```js
import create from 'zustand';
import axios from 'axios';

const useDataStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('https://api.example.com/data');
      set({ data: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

const DataComponent = () => {
  const { data, loading, error, fetchData } = useDataStore();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};
```

## 102.3 使用中间件

```js
npm install immer zustand-middleware-immer


import create from 'zustand';
import produce from 'immer';
import { immer } from 'zustand-middleware-immer';

const useStore = create(immer((set) => ({
  counter: 0,
  increment: () =>
    set((draft) => {
      draft.counter++;
    }),
})));

const CounterComponent = () => {
  const { counter, increment } = useStore();

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```
