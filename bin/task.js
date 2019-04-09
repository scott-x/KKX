const path = require('path');
var chalk = require('chalk');
const { readFile,writeFile,exists,copy} = require('slimz');

async function genPom(groupId,artifactId){
   let data = await readFile(path.resolve(__dirname,'../temp/pom.xml'));
   data=data.replace(/com.damu.mybatis/g,groupId).replace(/mybatis-pro/g,artifactId);
   let result = await exists('./pom.xml')
   if (result) {
   	await writeFile('./pom.xml',data);
   }else{
      console.log(`${chalk.red('   Error: The folder should be maven\'s root directory')}`);
   }
   let From = path.resolve(__dirname,'../temp/src/')
   let To = './src/'
   await copy(From,To)
   
}

module.exports={
	genPom
}