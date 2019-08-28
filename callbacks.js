function execute(what) {
    const argument = 'argument';
    what(argument);
}

execute(argument => console.log(argument));
execute(console.log);
