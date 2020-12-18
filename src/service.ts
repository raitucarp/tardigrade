import {
  DefinitionsService,
  ListOfStrings,
  ListOrDict,
} from "./compose.schema";

import { DefinitionToImplementionType, Scope } from "./tardigrade";

type BuildType = NonNullable<Exclude<DefinitionsService["build"], string>>;

class BuildService
  extends Scope<BuildType>
  implements DefinitionToImplementionType<BuildType, BuildService> {
  constructor(ctx: string) {
    super();
    this.props.context = ctx;
  }

  args(args: ListOrDict): BuildService {
    this.props.args = args;
    return this;
  }

  cacheFrom(caches: ListOfStrings): BuildService {
    this.props.cache_from = caches;
    return this;
  }

  context(ctx: string): BuildService {
    this.props.context = ctx;
    return this;
  }

  dockerfile(ctx: string): BuildService {
    this.props.context = ctx;
    return this;
  }

  extraHosts(hosts: ListOrDict): BuildService {
    this.props.extra_hosts = hosts;
    return this;
  }

  isolation(technology: string): BuildService {
    this.props.isolation = technology;
    return this;
  }

  labels(labelKeyValue: ListOrDict): BuildService {
    this.props.labels = labelKeyValue;
    return this;
  }

  network(host: string): BuildService {
    this.props.network = host;
    return this;
  }

  shmSize(size: string | number): BuildService {
    this.props.shm_size = size;
    return this;
  }

  target(stage: string): BuildService {
    this.props.target = stage;
    return this;
  }

  create(): BuildType {
    return this.props;
  }
}

type ServiceDefinition = NonNullable<DefinitionsService>;

class Service
  extends Scope<ServiceDefinition>
  implements DefinitionToImplementionType<ServiceDefinition, Service> {
  constructor() {
    super();
  }

  build(object: string | BuildType): Service {
    this.props.build = object;
    return this;
  }

  capAdd(capabilities: string[]): Service {
    this.props.cap_add = capabilities;
    return this;
  }

  capDrop(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  command(cmd: string | string[]): Service {
    this.props.command = cmd;
    return this;
  }

  blkioConfig(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }
  cgroupParent(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }
  configs(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }
  containerName(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }
  cpuCount(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }
  cpuPercent(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  cpuPeriod(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  cpuQuota(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  cpuRtPeriod(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  cpuRtRuntime(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  cpuShares(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  cpus(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  cpuset(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  credentialSpec(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  dependsOn(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  deploy(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  deviceCgroupRules(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  devices(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  dns(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  dnsOpt(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  dnsSearch(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  domainname(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  entrypoint(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  envFile(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  environment(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  expose(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  extends(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  externalLinks(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  extraHosts(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  groupAdd(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  healthcheck(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  hostname(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  image(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  init(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  ipc(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  isolation(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  labels(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  links(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  logging(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  macAddress(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  memLimit(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  memReservation(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  memSwappiness(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  memswapLimit(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  networkMode(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  networks(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  oomKillDisable(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  oomScoreAdj(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  pid(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  pidsLimit(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  platform(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  ports(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  privileged(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  profiles(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  pullPolicy(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  readOnly(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  restart(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  runtime(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  scale(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  secrets(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  securityOpt(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  shmSize(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  stdinOpen(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  stopGracePeriod(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  stopSignal(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  sysctls(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  tmpfs(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  tty(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  ulimits(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  user(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  usernsMode(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }
  volumes(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  volumesFrom(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  workingDir(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }
}

export default Service;
