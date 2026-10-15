---
title: "Understanding and Improving Communication Performance in Multi-node LLM Inference"
collection: publications
permalink: /publication/2026-05-26-cais-llm-communication
excerpt: 'As large language models continue to grow in size, distributed inference has become increasingly important.'
date: 2026-05-26
venue: 'ACM Conference on AI and Agentic Systems (CAIS)'
shortvenue: 'CAIS'
featured: true
authors:
  - "Prajwal Singhania"
  - "Siddharth Singh"
  - "Lannie Dalton Hough"
  - "Akarsh Srivastava"
  - "Harshitha Menon"
  - "Charles Fredrick Jekel"
  - "Abhinav Bhatele"
paperurl: 'https://doi.org/10.1145/3786335.3813165'
bibtex: |
  @misc{singhania2026understandingimprovingcommunicationperformance,
    title={Understanding and Improving Communication Performance in Multi-node LLM Inference},
    author={Prajwal Singhania and Siddharth Singh and Lannie Dalton Hough and Akarsh Srivastava and Harshitha Menon and Charles Fredrick Jekel and Abhinav Bhatele},
    year={2026},
    eprint={2511.09557},
    archivePrefix={arXiv},
    primaryClass={cs.DC},
    url={https://arxiv.org/abs/2511.09557}
  }
citation: "Prajwal Singhania, Siddharth Singh, Lannie Dalton Hough, Akarsh Srivastava, Harshitha Menon, Charles Fredrick Jekel, and Abhinav Bhatele. Understanding and Improving Communication Performance in Multi-node LLM Inference. CAIS 2026."
---

As large language models (LLMs) continue to grow in size, distributed inference has become increasingly important. Model-parallel strategies must now efficiently scale not only across multiple GPUs but also across multiple nodes. In this work, we present a detailed performance study of multi-node distributed inference using LLMs on GPU-based supercomputers.

We conduct experiments with several state-of-the-art inference engines alongside YALIS, a research-oriented prototype engine designed for controlled experimentation. We analyze the strong-scaling behavior of different model-parallel schemes and identify key bottlenecks. Because all-reduce operations are a common performance bottleneck, we develop NVRAR, a hierarchical all-reduce algorithm based on recursive doubling with NVSHMEM.

NVRAR achieves up to 1.9×–3.6× lower latency than NCCL for message sizes between 128 KB and 2 MB on HPE Slingshot and InfiniBand interconnects. Integrated into YALIS, NVRAR achieves up to a 1.72× reduction in end-to-end batch latency for the Llama 3.1 405B model in multi-node decode-heavy workloads using tensor parallelism.
