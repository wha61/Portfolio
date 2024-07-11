---
title: "Exploring Docker - Principles and Practice" 
date: 2023-07-23T11:08:02-12:00
draft: false
---

Docker is a containerization technology implemented in Go, which helps us quickly package applications into containers for release and deployment, and also facilitates the running of applications written by others.

Typically, Docker runs in a Unix system environment, and this article is also based on the Linux environment.

## What is a Container?
A container is a lightweight virtualization technology that, like a virtual machine, provides an isolated running environment (such as address space, file system, etc.) for the processes running within it. The applications running inside feel as though they have the entire physical machine to themselves.

Compared to OS virtualization technologies (such as virtual memory, etc.), virtual memory provides each process with an independent address space and running context, but the process itself is still running within the operating system and cannot provide a completely isolated process running environment.

- Processes know they are running within an operating system and accept scheduling from the operating system.
- Processes can be aware of the existence of other processes (pid ≠ 1).
- Compared to virtual machine technology, virtual machines need to simulate a set of hardware and operating systems on the host environment to run programs, which is too costly for just isolating a process environment.

## Why are Containers "Lightweight"?
If we want to deploy multiple services easily in the host environment without considering the details of each service (such as dependencies, exposed ports), the best way is to provide an isolated running environment for each service, just like running on independent physical machines.

The methods mentioned above are not very suitable for this need:

- OS virtual memory clearly cannot meet the requirements, it only provides independent address space and running context, its system resources are still shared.
- The virtual machine solution requires simulating an independent operating system and hardware for each service, which is too costly.
- To solve such needs, container virtualization technology has emerged.

A container process is essentially an isolated process in the operating system, without establishing independent hardware and OS, which is much less costly than a virtual machine, making it lightweight virtualization.

- The isolated process cannot be aware of the existence of other processes, it is the only process in its environment, and system resources are not shared with other processes.

## How is Container Isolation Achieved?
🌟 Isolation work is implemented by the Linux system, and Docker just helps us package and run a series of isolation operations before starting this isolated process.

Linux uses Namespace (to isolate containers) and Cgroups (to allocate resources) to implement further isolation for the isolated process on top of the existing independent address space and running context:

- Process Isolation: Implemented using Linux's Namespace mechanism, resulting in the process started in isolation always seeing its process ID as 1 and not seeing other processes in the system.
- File System Isolation: Each isolated process is mounted a virtual file system using Linux's mount mechanism, so an isolated process can only access this virtual file system and cannot see the real file system of the system (deciding what files are included in this file system is one of Docker's tasks).
- Network Protocol Stack Isolation: Using Linux's Namespace mechanism, analogous to the NAT mode in the virtual machine's network mode, each isolated process actually owns and runs on its own subnet. Docker, like NAT, helps us expose certain ports and is responsible for forwarding from the process's internal subnet to external ports (-p <source>:<target>).

## Limiting Container Resources:
Using Cgroup (Linux Control Group) to limit the resource ceiling used by a process group (including isolated processes), preventing containers from competing for all resources due to not knowing each other's existence, causing other services to be unable to run.

## Basic Concepts of Docker
Before talking about using Docker, we need to understand Docker's three core concepts: image, container, and repository.

### Image
🌟 The image is responsible for defining what is inside the container, including the root file system, dependencies required by the program, etc. Building an image is equivalent to building the environment required by the application and the running steps of the application itself.

In Linux, the operating system is divided into the kernel and user space. For Linux, after the kernel is booted, it mounts the root file system to provide user space support. One of the core tasks of Docker as a container (isolated process) management tool is to provide the isolated process with the file system it needs, and this process is the work of the image.

The Docker image (Image) is equivalent to a special root file system (for example, the official image ubuntu:18.04 contains a complete set of Ubuntu 18.04 minimum system root file system), in addition to providing the files needed for container runtime, such as programs, libraries, resources, configuration files, etc., it also contains some configuration parameters prepared for runtime (such as anonymous volumes, environment variables, users, etc.).

Since the image needs to include a complete root file system, its volume is relatively large, so a layered storage (layered construction) method is adopted to simplify construction. When building an image, it will be built layer by layer, the previous layer is the basis for the next layer. Once a layer is built, it will no longer change, and any changes in the next layer only occur in its own layer.

Therefore, when building an image in a layered manner, each layer should only contain the things that need to be added to that layer, and any extra things should be cleaned up before the end of the layer construction.

### Container
🌟 A container is an instance of an image, just like a class and an instance, and its essence is the isolated process mentioned above with its own namespace.

The relationship between an Image and a Container is like the relationship between a class and an instance in object-oriented programming design. An image is a static definition, and a container is an entity of the image running. Containers can be created, started, stopped, deleted, paused, etc.

The container mentioned here and the container mentioned above are the same concept. Its essence is an isolated process in the operating system with its own namespace.

In layered storage, the container also has its own storage layer, built on the image storage layer, prepared for container runtime reading and writing. It is generated when the container is started and will be cleared when the container is closed (the lifecycle is the same as the container itself).

According to Docker best practices, containers should not write any data to their storage layer. All file write operations should use Volume or bind host directories. The reads and writes at these locations will bypass the container storage layer and directly read and write to the host (or network storage), which has higher performance and stability. The lifecycle of the data volume is independent of the container, the container disappears, and the data volume does not disappear. Therefore, after using the data volume, the container is deleted or rerun, but the data will not be lost.

### Repository
🌟 A repository is a place to store and publish container images.

Take the Docker Repository as an example: a Docker Registry can contain multiple repositories; each repository can contain multiple tags; each tag corresponds to an image.

For example, the Ubuntu repository contains different version tags, such as 16.04, 18.04. We can specify which version of the image we need through ubuntu:16.04 or ubuntu:18.04. If the tag is ignored, such as ubuntu, it will be considered as ubuntu:latest.

## Using Docker
### Starting a container docker run
After starting the Docker service, running the docker run <image> <...cmd> command in the terminal will start the container, and its running process is as follows:

- Check if the specified image exists locally, if not, download it from the registry
- Use the image to create and start a container
- Allocate a file system and mount a writable layer on top of the read-only image layer
- Bridge a virtual interface from the host's bridge interface to the container
- Configure an IP address for the container from the address pool
- Execute the user-specified application
- The container is terminated after execution
The supported parameters are as follows, and the run parameters without parameters can be combined, such as -it:

- -t allocates a pseudo-tty and binds it to the container's standard input
- -i keeps the container's standard input open, combined with -t can generate an interactive terminal
- -p <localPort>:<containerPort> port mapping
- -d runs the container in daemon mode, stdout will be bound to Docker Log, using docker attach <container> can enter the container
### Defining an image with Dockerfile
Dockerfile is a text file containing a series of Instructions, each instruction corresponds to a layer in layered storage, so each instruction's content is to describe how the layer should be built, so it is also called layered construction. Each layer's construction instruction will build a new layer on the original layer, execute the command, and then commit the modifications of this layer.

Dockerfile can be said to be a Docker script, containing commands to modify, install, build, and operate each layer. Using Dockerfile, you can customize your own image.

- Use FROM to specify the base image
- The special image - scratch, refers to an empty image, which may be useful when running binary programs directly (such as Go images) because all the required libraries are already in the executable file, and no OS runtime support is needed.

The customization of the image must be based on an image, and FROM is the instruction to specify the base image, so a Dockerfile must have the FROM instruction, and it must be the first instruction.

- Use RUN to execute commands
🌟 Every instruction in Dockerfile will build a layer, and RUN is no exception.

RUN is a powerful instruction with the same capabilities as Shell, which can execute system commands or executable files, corresponding to two formats:

- RUN <cmd> system command
- RUN [<filePath> [, arg1, arg2, ...]] executable file, passing parameters in array form
Since RUN instructions will create a new layer of UnionFS storage, please pay special attention not to create additional RUN instructions, try to combine all possible instructions in one RUN, because UnionFS has a layer limit (such as AUFS used to have a maximum of no more than 42 layers, now it is no more than 127 layers).

```markdown
# Wrong: Too many layers
FROM debian:stretch

RUN apt-get update
RUN apt-get install -y gcc libc6-dev make wget
RUN wget -O redis.tar.gz "http://download.redis.io/releases/redis-5.0.3.tar.gz"
RUN mkdir -p /usr/src/redis
RUN tar -xzf redis.tar.gz -C /usr/src/redis --strip-components=1
RUN make -C /usr/src/redis
RUN make -C /usr/src/redis install

# Correct: Only 1 layer for `RUN`
FROM debian:stretch

RUN set -x; buildDeps='gcc libc6-dev make wget' \
    && apt-get update \
    && apt-get install -y $buildDeps \
    && wget -O redis.tar.gz "http://download.redis.io/releases/redis-5.0.3.tar.gz" \
    && mkdir -p /usr/src/redis \
    && tar -xzf redis.tar.gz -C /usr/src/redis --strip-components=1 \
    && make -C /usr/src/redis \
    && make -C /usr/src/redis install \
    && rm -rf /var/lib/apt/lists/* \
    && rm redis.tar.gz \
    && rm -r /usr/src/redis \
    && apt-get purge -y --auto-remove $buildDeps

```

# Building Images with Docker

To build an image named `<name>` in Shell, run `docker build -t <name> <path>`, such as `docker build -t test .`. This command builds an image named `name`.

Since Docker operates on a Client/Server architecture, the `docker` command we use is just the client side. All running and building tasks are carried out on the server side, communicating through a set of REST APIs. This makes Docker convenient for managing remote container services.

When we run `docker build`, the specified path is packaged and uploaded to the Docker engine, introducing the concept of a context path. In the Dockerfile, the paths accessed are context paths, limited to files within the context path range, such as `../out.file` cannot be accessed in the Dockerfile.

## Other Ways to Build:
Besides manually specifying the local context directory, Dockerfile supports other methods:
- Building from a Git repository: `docker build <git-url>`
- Creating from a tar archive: `docker build <tar-url>`

## Other Instructions:
### Managing the Context Directory
- The `COPY <src> <target>` instruction copies files/directories from the build context directory `<source path>` to a new layer inside the image at `<target path>`.
- The source path can be multiple, and wildcards are allowed.
- If the source path is a folder, it copies the contents of the folder to the target path, not the folder itself.
- The target path can be an absolute path within the container or a relative path to the work directory (which can be specified with the `WORKDIR` instruction).
- The target path does not need to be created in advance; if the directory does not exist, it will be created before copying files.
  
### Options:
- `—source <stage>` specifies the context directory as a certain stage.
- `—chown` changes file status (permission group).

### `WORKDIR <dir>`:
Specifies the working directory (or current directory). The current directory of all subsequent layers will be changed to the specified directory. If the directory does not exist, `WORKDIR` will help you create it. This is different from `RUN cd`: `WORKDIR` applies to all later layers, while `RUN cd` only applies to the current layer.

### `EXPOSE <port>`:
Exposes ports (referring to the internal network's ports), supports exposing multiple ports. Manual specification of each port's mapping or automatic assignment is supported when mapping.

### `CMD`:
Specifies the container's startup command, similar to the `RUN` format, but the container will start after executing the `CMD` command.

### `SHELL`:
The instruction can specify the host terminal for `RUN` and `CMD` instructions.

## Data Management
According to Docker best practices, containers should not write any data to their storage layer. All file write operations should use data volumes or bind host directories. Specifically, Docker uses the Linux system's mount function to mount specified directories to specific physical storage areas.

## Data Volumes
Data volumes (`Volume`) are special directories that can be used by one or more containers, independent of UnionFS outside, providing a piece of storage space that will not be lost when containers terminate. Its design purpose is to achieve data sharing and persistent storage between containers.

- Data volumes can be shared and reused between containers.
- Modifications to data volumes take effect immediately.
- Updates to data volumes will not affect the image.
- Data volumes will always exist, even if the container is deleted.

To create a data volume, use `docker volume create <name>`, which can later be called and bound by name.

To view all data volumes, use `docker volume ls`.

To bind a data volume, use the `--mount` parameter when running a container, as the following command mounts `/usr/share/nginx/html` to the `my-vol` data volume:

```shell
docker run -d -P \
  --name web \
  --mount source=my-vol,target=/usr/share/nginx/html \
  nginx:alpine
  
```

## Adapt From 

https://chlorinec.top/post/development/hands-on-docker/
