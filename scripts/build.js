import { execSync } from "child_process";

try {
	console.log("Clearing previous build...");
	execSync("npm run clear", { stdio: "inherit" });

	console.log("Building project...");
	execSync("npm run build", { stdio: "inherit" });

	console.log("Building storybook...");
	execSync("npm run build-storybook", { stdio: "inherit" });

	console.log("Copying storybook-static to dist...");
	execSync("cp -r ./storybook-static ./dist", { stdio: "inherit" });

	console.log("Renaming storybook-static to storybook inside dist...");
	execSync("mv ./dist/storybook-static ./dist/storybook", { stdio: "inherit" });

	console.log("Build process completed successfully!");
} catch (error) {
	console.error("An error occurred during the build process:", error);
	process.exit(1);
}
