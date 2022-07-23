#!/usr/bin/env node

/**
 * woosh
 * a fun cli project im working on
 *
 * @author jck <https://github.com/jckop>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const { spawn } = require('child_process');
const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	input.includes(`djs`) && spawn('npm', ['i', 'discord.js']);
	input.includes(`fol`) && spawn('mkdir', ['Commands', 'Functions', 'Models']);
	debug && log(flags);
})();
