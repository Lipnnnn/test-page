/// <reference types="vite/client" />
/**
 * env.d.ts文件是【TypeScript的类型声明文件】，可以使得 TypeScript 提供更好的类型检查和自动补全。用于为TypeScript提供额外的类型信息，通常是关于【环境变量】或者【全局类型】的声明。
 * 如何使用【env.d.ts】文件：
 * 1. 为环境变量提供类型声明
   在Vue项目中可能会使用【.env】文件来配置环境变量。例如，【.env】文件可能包含以下内容：
   VUE_APP_API_URL=https://api.example.com
   VUE_APP_APP_VERSION=1.0.0
   要在TS中使用这些环境变量并且得到类型提示和检查，你可以在【env.d.ts】文件中为这些环境变量声明类型。例如：
   【declare const VUE_APP_API_URL: string;】
   【declare const VUE_APP_APP_VERSION: string;】
   在这个例子中，我们为 VUE_APP_API_URL 和 VUE_APP_APP_VERSION 两个环境变量提供了类型声明，告诉 TypeScript 它们是 string 类型的变量。
 * 2. 为全局类型声明添加类型信息
   如果你的项目中有一些全局变量或者类型，想让它们在全局范围内可用，你可以在 env.d.ts 中声明。
   例如，假设你使用了一个全局的 config 对象：
    declare const config: {
    apiUrl: string;
    appName: string;
    };
   你可以将它放在 env.d.ts 中，使得 TypeScript 知道 config 是一个全局可用的对象，且具有指定的类型。
 */
