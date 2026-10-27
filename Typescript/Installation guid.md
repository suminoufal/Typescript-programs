# TypeScript Installation Guide (Windows)

## Step 1: Open PowerShell as Administrator

Press **Windows Key** → search **PowerShell** → right-click → **Run as Administrator**.

## Step 2: Enable Script Execution (If Required)

This prevents PowerShell execution policy errors while running npm commands.

```powershell
# Allows PowerShell scripts to run for the current user while requiring downloaded scripts to be signed
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

When prompted, enter:

```
Y
```

Verify:

```powershell
Get-ExecutionPolicy
```

Expected output:

```
RemoteSigned
```

## Step 3: Verify Node.js Installation

TypeScript requires Node.js and npm.

Check if Node.js is installed:

```powershell
node -v
```

Check npm version:

```powershell
npm -v
```

Example output:

```
v22.15.0
10.9.2
```

If these commands fail, install Node.js first from the [official website](https://nodejs.org/).

## Step 4: Install TypeScript Globally

Install TypeScript so the compiler is available system-wide.

```powershell
# Installs TypeScript globally so the 'tsc' command can be used from any folder
npm install -g typescript
```

## Step 5: Verify TypeScript Installation

Check the installed TypeScript version.

```powershell
# Displays the currently installed TypeScript compiler version
tsc -v
```

Example output:

```
Version 5.8.3
```

## Step 6: Create a New Project

Create a project folder:

```powershell
mkdir TypeScriptDemo
cd TypeScriptDemo
```

## Step 7: Initialize npm

Create a `package.json` file.

```powershell
npm init -y
```

This generates:

```json
{
  "name": "typescriptdemo",
  "version": "1.0.0"
}
```

## Step 8: Install TypeScript Locally

Install TypeScript and Node.js typings for the project.

```powershell
# Installs TypeScript and Node.js type definitions locally as development dependencies
npm install typescript @types/node --save-dev
```

## Step 9: Create tsconfig.json

Generate the TypeScript configuration file.

```powershell
# Creates a tsconfig.json file with default TypeScript project configuration settings
npx tsc --init
```

Generated file: `tsconfig.json`

This file controls:

- Compiler options
- Target ECMAScript version
- Module type
- Strict mode
- Source maps

## Step 10: Install TSX (Optional but Recommended)

TSX lets you run TypeScript directly without manual compilation.

```powershell
# Installs TSX globally to execute TypeScript files directly
npm install -g tsx
```

## Step 11: Create a TypeScript File

Create `app.ts`:

```typescript
const message: string = "Hello TypeScript";
console.log(message);
```

## Step 12: Compile TypeScript to JavaScript

```powershell
tsc app.ts
```

Generated: `app.js`

## Step 13: Run the JavaScript File

```powershell
node app.js
```

Output:

```
Hello TypeScript
```

## Step 14: Run TypeScript Directly Using TSX

Instead of compiling:

```powershell
tsx app.ts
```

Output:

```
Hello TypeScript
```

---

## Common Errors and Fixes

### PowerShell Execution Policy Error

```
Running scripts is disabled on this system
```

Fix:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### SSL/Certificate Error

```
SELF_SIGNED_CERT_IN_CHAIN
```

Fix:

```powershell
npm config set strict-ssl false
```

> **Note:** This turns off SSL certificate checks for npm. Only use it if you're behind a corporate proxy, and turn it back on afterwards with `npm config set strict-ssl true`.

### TypeScript Command Not Found

```
'tsc' is not recognized
```

Fix:

```powershell
npm install -g typescript
```

Restart PowerShell and verify:

```powershell
tsc -v
```

---

## Complete Installation Commands

```powershell
# Allows PowerShell scripts to run for the current user and prevents script execution errors
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

# Checks whether Node.js is installed and displays its version
node -v

# Checks whether npm (Node Package Manager) is installed and displays its version
npm -v

# Installs TypeScript globally so the 'tsc' command can be used from any folder
npm install -g typescript

# Verifies that TypeScript is installed and displays the installed version
tsc -v

# Creates a new project folder named TypeScriptDemo
mkdir TypeScriptDemo

# Navigates into the TypeScriptDemo project folder
cd TypeScriptDemo

# Creates a package.json file with default project settings
npm init -y

# Installs TypeScript and Node.js type definitions as development dependencies for the project
npm install typescript @types/node --save-dev

# Generates a tsconfig.json file containing TypeScript compiler configuration settings
npx tsc --init

# Installs TSX globally to run TypeScript files directly without manual compilation
npm install -g tsx
```

After these steps, your Windows machine is fully configured for TypeScript development.

## Example Usage After Installation

```powershell
# Creates a TypeScript file named app.ts
New-Item app.ts

# Compiles the TypeScript file into JavaScript
tsc app.ts

# Runs the generated JavaScript file using Node.js
node app.js

# Runs the TypeScript file directly without compilation using TSX
tsx app.ts
```

## Files Created During Setup

| File | Created by | Purpose |
|------|-----------|---------|
| `package.json` | `npm init -y` | Project details and dependencies |
| `package-lock.json` | `npm install` | Locks exact dependency versions |
| `node_modules/` | `npm install` | Installed packages |
| `tsconfig.json` | `npx tsc --init` | TypeScript compiler settings |
| `app.ts` | You | TypeScript source file |
| `app.js` | `tsc app.ts` | Compiled JavaScript output |

## Interview One-Liners

- **Node.js** → JavaScript runtime.
- **npm** → Package manager used to install libraries.
- **TypeScript** → Superset of JavaScript that adds static typing.
- **@types/node** → Type definitions for Node.js APIs.
- **tsconfig.json** → Configuration file for the TypeScript compiler.
- **TSX** → Runs TypeScript files directly without generating JavaScript files first.