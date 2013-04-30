#!/bin/bash

python ../app/components/closure-library/closure/bin/build/closurebuilder.py \
	--compiler_jar=compiler.jar \
	--compiler_flag=--externs=./angular-externs.js \
	--compiler_flag=--output_wrapper="(function(){%output%})();" \
	--compiler_flag=--compilation_level=ADVANCED_OPTIMIZATIONS \
	--compiler_flag=--warning_level=VERBOSE \
	--compiler_flag=--jscomp_error=checkTypes \
	--compiler_flag=--jscomp_error=accessControls \
	--namespace=WeatherApp.config \
	--root=../app/components/closure-library/closure/goog \
	--root=../app/components/closure-library/third_party/closure \
	--root=../app/scripts \
	--output_file=compiled.js \
	--output_mode=compiled
	

# 	--angular_pass \
# --generate_exports \
# <arg value="--compiler_flag=--jscomp_warning=accessControls" />   <!-- this is apparently a new flag and closure library fails it... set to warn only -->
# <arg value="--compiler_flag=--define=goog.dom.ASSUME_STANDARDS_MODE=true" />
# <arg value="--compiler_flag=--define=goog.DEBUG=true" />

# ADVANCED_OPTIMIZATIONS
# SIMPLE_OPTIMIZATIONS
# WHITESPACE_ONLY