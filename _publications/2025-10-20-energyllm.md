---
title: "Building, EnergyLLM: A Domain-Specific Large Language Model Trained on SPE Content"
collection: publications
permalink: /publication/2025-10-20-energyllm
excerpt: 'This work describes how we built and evaluated EnergyLLM, a large language model for the energy domain.'
date: 2025-10-20
venue: 'SPE Annual Technical Conference and Exhibition'
shortvenue: 'ATCE'
authors:
  - "Joshua Eckroth"
  - "John Boden"
  - "Lannie Dalton Hough"
  - "Heyley Gatewood"
  - "Skyler Gipson"
  - "Eric Schoen"
  - "B. Gunderson"
paperurl: 'https://doi.org/10.2118/228097-MS'
bibtex: |
  @inproceedings{Eckroth_2025,
    series = {25ATCE},
    title = {Building, EnergyLLM: A Domain-Specific Large Language Model Trained on SPE Content},
    url = {http://dx.doi.org/10.2118/228097-MS},
    DOI = {10.2118/228097-ms},
    booktitle = {SPE Annual Technical Conference and Exhibition},
    publisher = {SPE},
    author = {Eckroth, J. and Boden, J. and Hough, L. and Gatewood, H. and Gipson, S. and Schoen, E. and Gunderson, B.},
    year = {2025},
    month = oct,
    collection = {25ATCE}
  }
citation: "J. Eckroth, J. Boden, L. Hough, H. Gatewood, S. Gipson, E. Schoen, and B. Gunderson. Building, EnergyLLM: A Domain-Specific Large Language Model Trained on SPE Content. SPE ATCE 2025."
---

This work describes how we built and evaluated "EnergyLLM," a large language model like OpenAI's GPT-4o for the energy domain. The project is a collaboration among Aramco, SPE, and i2k Connect. The model was trained on SPE's content including OnePetro papers, SPE-published books, and PetroWiki. Our goal was to produce a language model that knows more about the energy domain, specifically petroleum engineering, than other available models. We fine-tuned Llama 3, Meta's open source foundation model, with training data we generated from SPE's content. We also developed an embedding model for search applications that we built from EnergyLLM's training data. We evaluated the performance of EnergyLLM with subject matter experts in a head-to-head comparison with the Llama 3 model. Results showed that SMEs significantly preferred EnergyLLM. We also evaluated the embedding model on retrieval tasks, and asked ChatGPT how it thinks EnergyLLM compares to its own responses.
