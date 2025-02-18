#!/bin/bash
COVERAGE=$(grep -oP '"lines":{"total":\d+,"covered":\d+,"skipped":0,"pct":\d+' ./coverage/coverage-summary.json)
echo "coverage_percentage=$COVERAGE"