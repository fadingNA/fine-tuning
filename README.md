# fine-tuning

> pip install --upgrade openai
__
> export OPENAI_API_KEY=""

- training data with datasets.JSONL

> openai tools fine_tunes.prepare_data -f <LOCAL_FILE>
> openai api fine_tunes.create -t <TRAIN_FILE_ID_OR_PATH> -m <BASE_MODEL>
> openai api fine_tunes.follow -i <YOUR_FINE_TUNE_JOB_ID>

Source: https://platform.openai.com/docs/guides/fine-tuning
