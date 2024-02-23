// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export const POST_INIT_TICK = 20;
export const TEAM_INIT_TICK = 40;
export const TEAM_SIZE_X = 6;
export const TEAM_SIZE_Z = 6;
export const PAD_SIZE_X = 32;
export const PAD_SIZE_Y = 48;
export const PAD_SIZE_Z = 32;
export const PAD_SURROUND_X = 32;
export const PAD_SURROUND_Z = 32;
export const AIRSPACE_GAP = 6;

export const TOTAL_X = TEAM_SIZE_X * PAD_SIZE_X + TEAM_SIZE_X * PAD_SURROUND_X;
export const TOTAL_Y = PAD_SIZE_Y;
export const TOTAL_Z = TEAM_SIZE_Z * PAD_SIZE_Z + TEAM_SIZE_Z * PAD_SURROUND_Z;

export const JOIN_TEAM_X = 3;
export const JOIN_TEAM_Y = 1;
export const JOIN_TEAM_Z = PAD_SIZE_Z + PAD_SURROUND_Z - 6;

export const TEAM_OPTIONS_X = 5;
export const TEAM_OPTIONS_Y = 1;
export const TEAM_OPTIONS_Z = PAD_SIZE_Z + PAD_SURROUND_Z - 6;
export const PLAYER_DATA_STORAGE_SIZE = 8192;

export const OPTIONS_AREA_TEAM_X = 2;
export const OPTIONS_AREA_TEAM_Y = 0;
export const OPTIONS_AREA_TEAM_Z = PAD_SIZE_Z + PAD_SURROUND_Z - 8;

export const SPAWN_TEAM_X = 2;
export const SPAWN_TEAM_Y = 1;
export const SPAWN_TEAM_Z = PAD_SIZE_Z + PAD_SURROUND_Z - 1;

export const MAX_SLOTS = 32;
export const MAX_TIME_TO_SWITCH_TEAMS_TICK = 12000; // 10 minutes

export const MAX_PLAYERS_TEAM = 8;

export const STANDARD_TRACK_TIME = 1200;

export const BLOCK_SCORESHEET: { [type: string]: number } = {
  diamond_block: 8000,
  bedrock: 100,
  diamond_ore: 40,
  crafting_table: 30,
  note_block: 22,
  mob_spawner: 20,
  lit_furnace: 20,
  dispenser: 20,
  golden_rail: 20,
  standing_sign: 16,
  netherrack: 12,
  soul_sand: 12,
  chest: 12,
  powered_rail: 10,
  detector_rail: 10,
  sticky_piston: 10,
  gold_ore: 10,
  iron_ore: 10,
  coal_ore: 10,
  lapis_block: 10,
  sandstone: 10,
  noteblock: 10,
  bed: 10,
  tallgrass: 10,
  deadbush: 10,
  piston: 10,
  piston_head: 10,
  wool: 10,
  piston_extension: 10,
  yellow_flower: 10,
  red_flower: 10,
  gold_block: 10,
  iron_block: 10,
  double_stone_slab: 10,
  stone_slab: 10,
  brick_block: 10,
  tnt: 10,
  bookshelf: 10,
  mossy_cobblestone: 10,
  obsidian: 10,
  torch: 10,
  log: 8,
  log2: 8,
  chiseled_sandstone: 8,
  cut_sandstone: 8,
  oak_stairs: 8,
  glass: 6,
  pistonarmcollision: 8,
  brown_mushroom: 6,
  red_mushroom: 6,
  redstone_wire: 6,
  wheat: 6,
  spruce_fence_gate: 6,
  birch_fence_gate: 6,
  jungle_fence_gate: 6,
  dark_oak_fence_gate: 6,
  acacia_fence_gate: 6,
  chemical_heat: 6,
  spruce_door: 6,
  birch_door: 6,
  jungle_door: 6,
  acacia_door: 6,
  dark_oak_door: 6,
  grass_path: 6,
  frame: 6,
  stone: 4,
  planks: 4,
  sapling: 4,
  sand: 4,
  gravel: 2,
  leaves: 4,
  sponge: 4,
  double_stone_slab2: 4,
  stone_slab2: 4,
  cobweb: 4,
  grass: 2,
  fern: 2,
  dead_bush: 4,
  seagrass: 4,
  sea_pickle: 4,
  fire: 4,
  leaves2: 2,
  dirt: 2,
  cobblestone: 2,
  farmland: 10,
  furnace: 10,
  lava: 10,
  lapis_ore: 10,
  web: 10,
  element_0: 10,
  wooden_door: 10,
  ladder: 10,
  rail: 10,
  stone_stairs: 10,
  wall_sign: 10,
  lever: 10,
  stone_pressure_plate: 10,
  iron_door: 10,
  wooden_pressure_plate: 10,
  redstone_ore: 10,
  lit_redstone_ore: 10,
  unlit_redstone_torch: 10,
  redstone_torch: 10,
  stone_button: 10,
  snow_layer: 10,
  ice: 10,
  snow: 10,
  cactus: 10,
  clay: 10,
  reeds: 10,
  jukebox: 10,
  fence: 10,
  pumpkin: 10,
  glowstone: 10,
  portal: 10,
  lit_pumpkin: 10,
  cake: 10,
  unpowered_repeater: 10,
  powered_repeater: 10,
  invisibleBedrock: 10,
  trapdoor: 10,
  monster_egg: 10,
  stonebrick: 10,
  brown_mushroom_block: 10,
  red_mushroom_block: 10,
  iron_bars: 10,
  glass_pane: 10,
  melon_block: 10,
  pumpkin_stem: 10,
  melon_stem: 10,
  vine: 10,
  fence_gate: 10,
  brick_stairs: 10,
  stone_brick_stairs: 10,
  mycelium: 10,
  waterlily: 10,
  nether_brick: 10,
  nether_brick_fence: 10,
  nether_brick_stairs: 10,
  nether_wart: 10,
  enchanting_table: 10,
  brewing_stand: 10,
  cauldron: 10,
  end_portal: 10,
  end_portal_frame: 10,
  end_stone: 10,
  dragon_egg: 10,
  redstone_lamp: 10,
  lit_redstone_lamp: 10,
  dropper: 10,
  activator_rail: 10,
  cocoa: 10,
  sandstone_stairs: 10,
  emerald_ore: 10,
  ender_chest: 10,
  tripwire_hook: 10,
  tripwire: 10,
  emerald_block: 10,
  spruce_stairs: 10,
  birch_stairs: 10,
  jungle_stairs: 10,
  command_block: 10,
  beacon: 10,
  cobblestone_wall: 10,
  flower_pot: 10,
  carrots: 10,
  potatoes: 10,
  wooden_button: 10,
  skull: 10,
  anvil: 10,
  trapped_chest: 10,
  light_weighted_pressure_plate: 10,
  heavy_weighted_pressure_plate: 10,
  unpowered_comparator: 10,
  powered_comparator: 10,
  daylight_detector: 10,
  redstone_block: 10,
  quartz_ore: 10,
  hopper: 10,
  quartz_block: 10,
  quartz_stairs: 10,
  double_wooden_slab: 10,
  wooden_slab: 10,
  stained_hardened_clay: 10,
  stained_glass_pane: 10,
  acacia_stairs: 10,
  dark_oak_stairs: 10,
  slime: 10,
  iron_trapdoor: 10,
  prismarine: 10,
  sealantern: 10,
  hay_block: 10,
  carpet: 10,
  hardened_clay: 10,
  coal_block: 10,
  packed_ice: 10,
  double_plant: 10,
  standing_banner: 10,
  wall_banner: 10,
  daylight_detector_inverted: 10,
  red_sandstone: 10,
  red_sandstone_stairs: 10,
  repeating_command_block: 10,
  chain_command_block: 10,
  hard_glass_pane: 10,
  hard_stained_glass_pane: 10,
  chorus_flower: 10,
  purpur_block: 10,
  colored_torch_rg: 10,
  purpur_stairs: 10,
  colored_torch_bp: 10,
  undyed_shulker_box: 10,
  end_bricks: 10,
  frosted_ice: 10,
  end_rod: 10,
  end_gateway: 10,
  allow: 10,
  deny: 10,
  border_block: 10,
  magma: 10,
  nether_wart_block: 10,
  red_nether_brick: 10,
  bone_block: 10,
  structure_void: 10,
  shulker_box: 10,
  purple_glazed_terracotta: 10,
  white_glazed_terracotta: 10,
  orange_glazed_terracotta: 10,
  magenta_glazed_terracotta: 10,
  light_blue_glazed_terracotta: 10,
  yellow_glazed_terracotta: 10,
  lime_glazed_terracotta: 10,
  pink_glazed_terracotta: 10,
  gray_glazed_terracotta: 10,
  silver_glazed_terracotta: 10,
  cyan_glazed_terracotta: 10,
  chalkboard: 10,
  blue_glazed_terracotta: 10,
  brown_glazed_terracotta: 10,
  green_glazed_terracotta: 10,
  red_glazed_terracotta: 10,
  black_glazed_terracotta: 10,
  concrete: 10,
  concrete_powder: 10,
  chemistry_table: 10,
  underwater_torch: 10,
  chorus_plant: 10,
  stained_glass: 10,
  camera: 10,
  podzol: 10,
  beetroot: 10,
  stonecutter: 10,
  glowingobsidian: 10,
  netherreactor: 10,
  info_update: 10,
  info_update2: 10,
  movingBlock: 10,
  observer: 10,
  structure_block: 10,
  hard_glass: 10,
  hard_stained_glass: 10,
  reserved6: 10,
  prismarine_stairs: 10,
  dark_prismarine_stairs: 10,
  prismarine_bricks_stairs: 10,
  stripped_spruce_log: 10,
  stripped_birch_log: 10,
  stripped_jungle_log: 10,
  stripped_acacia_log: 10,
  stripped_dark_oak_log: 10,
  stripped_oak_log: 10,
  blue_ice: 10,
  coral: 10,
  coral_block: 10,
  coral_fan: 10,
  coral_fan_dead: 10,
  coral_fan_hang: 10,
  coral_fan_hang2: 10,
  coral_fan_hang3: 10,
  kelp: 10,
  dried_kelp_block: 10,
  acacia_button: 10,
  birch_button: 10,
  dark_oak_button: 10,
  jungle_button: 10,
  spruce_button: 10,
  acacia_trapdoor: 10,
  birch_trapdoor: 10,
  dark_oak_trapdoor: 10,
  jungle_trapdoor: 10,
  spruce_trapdoor: 10,
  acacia_pressure_plate: 10,
  birch_pressure_plate: 10,
  dark_oak_pressure_plate: 10,
  jungle_pressure_plate: 10,
  spruce_pressure_plate: 10,
  carved_pumpkin: 10,
  conduit: 10,
  turtle_egg: 10,
  bubble_column: 10,
  barrier: 10,
  stone_slab3: 10,
  bamboo: 10,
  bamboo_sapling: 10,
  scaffolding: 10,
  stone_slab4: 10,
  double_stone_slab3: 10,
  double_stone_slab4: 10,
  granite_stairs: 10,
  diorite_stairs: 10,
  andesite_stairs: 10,
  polished_granite_stairs: 10,
  polished_diorite_stairs: 10,
  polished_andesite_stairs: 10,
  mossy_stone_brick_stairs: 10,
  smooth_red_sandstone_stairs: 10,
  smooth_sandstone_stairs: 10,
  end_brick_stairs: 10,
  mossy_cobblestone_stairs: 10,
  normal_stone_stairs: 10,
  spruce_standing_sign: 10,
  spruce_wall_sign: 10,
  smooth_stone: 10,
  red_nether_brick_stairs: 10,
  smooth_quartz_stairs: 10,
  birch_standing_sign: 10,
  birch_wall_sign: 10,
  jungle_standing_sign: 10,
  jungle_wall_sign: 10,
  acacia_standing_sign: 10,
  acacia_wall_sign: 10,
  darkoak_standing_sign: 10,
  darkoak_wall_sign: 10,
  lectern: 10,
  grindstone: 10,
  blast_furnace: 10,
  stonecutter_block: 10,
  smoker: 10,
  lit_smoker: 10,
  cartography_table: 10,
  fletching_table: 10,
  smithing_table: 10,
  barrel: 10,
  loom: 10,
  bell: 10,
  sweet_berry_bush: 10,
  lantern: 10,
  campfire: 10,
  lava_cauldron: 10,
  jigsaw: 10,
  wood: 10,
  composter: 10,
  lit_blast_furnace: 10,
  light_block: 10,
  wither_rose: 10,
  stickypistonarmcollision: 10,
  bee_nest: 10,
  beehive: 10,
  honey_block: 10,
  honeycomb_block: 10,
  lodestone: 10,
  crimson_roots: 10,
  warped_roots: 10,
  crimson_stem: 10,
  warped_stem: 10,
  warped_wart_block: 10,
  crimson_fungus: 10,
  warped_fungus: 10,
  shroomlight: 10,
  weeping_vines: 10,
  crimson_nylium: 10,
  warped_nylium: 10,
  basalt: 10,
  polished_basalt: 10,
  soul_soil: 10,
  soul_fire: 10,
  nether_sprouts: 10,
  target: 10,
  stripped_crimson_stem: 10,
  stripped_warped_stem: 10,
  crimson_planks: 10,
  warped_planks: 10,
  crimson_door: 10,
  warped_door: 10,
  crimson_trapdoor: 10,
  warped_trapdoor: 10,
  crimson_standing_sign: 10,
  warped_standing_sign: 10,
  crimson_wall_sign: 10,
  warped_wall_sign: 10,
  crimson_stairs: 10,
  warped_stairs: 10,
  crimson_fence: 10,
  warped_fence: 10,
  crimson_fence_gate: 10,
  warped_fence_gate: 10,
  crimson_button: 10,
  warped_button: 10,
  crimson_pressure_plate: 10,
  warped_pressure_plate: 10,
  crimson_slab: 10,
  warped_slab: 10,
  crimson_double_slab: 10,
  warped_double_slab: 10,
  soul_torch: 10,
  soul_lantern: 10,
  netherite_block: 10,
  ancient_debris: 10,
  respawn_anchor: 10,
  blackstone: 10,
  polished_blackstone_bricks: 10,
  polished_blackstone_brick_stairs: 10,
  blackstone_stairs: 10,
  blackstone_wall: 10,
  polished_blackstone_brick_wall: 10,
  chiseled_polished_blackstone: 10,
  cracked_polished_blackstone_bricks: 10,
  gilded_blackstone: 10,
  blackstone_slab: 10,
  blackstone_double_slab: 10,
  polished_blackstone_brick_slab: 10,
  polished_blackstone_brick_double_slab: 10,
  chain: 10,
  twisting_vines: 10,
  nether_gold_ore: 10,
  crying_obsidian: 10,
  soul_campfire: 10,
  polished_blackstone: 10,
  polished_blackstone_stairs: 10,
  polished_blackstone_slab: 10,
  polished_blackstone_double_slab: 10,
  polished_blackstone_pressure_plate: 10,
  polished_blackstone_button: 10,
  polished_blackstone_wall: 10,
  warped_hyphae: 10,
  crimson_hyphae: 10,
  stripped_crimson_hyphae: 10,
  stripped_warped_hyphae: 10,
  chiseled_nether_bricks: 10,
  cracked_nether_bricks: 10,
  quartz_bricks: 10,
  unknown: 10,
  powder_snow: 10,
  sculk_sensor: 10,
  pointed_dripstone: 10,
  copper_ore: 3,
  lightning_rod: 10,
  dripstone_block: 10,
  dirt_with_roots: 10,
  hanging_roots: 10,
  moss_block: 10,
  spore_blossom: 10,
  cave_vines: 10,
  big_dripleaf: 10,
  azalea_leaves: 10,
  azalea_leaves_flowered: 10,
  calcite: 10,
  amethyst_block: 10,
  budding_amethyst: 10,
  amethyst_cluster: 10,
  large_amethyst_bud: 10,
  medium_amethyst_bud: 10,
  small_amethyst_bud: 10,
  tuff: 10,
  tinted_glass: 10,
  moss_carpet: 10,
  small_dripleaf_block: 10,
  azalea: 10,
  flowering_azalea: 10,
  glow_frame: 10,
  copper_block: 1,
  exposed_copper: 10,
  weathered_copper: 10,
  oxidized_copper: 10,
  waxed_copper: 10,
  waxed_exposed_copper: 10,
  waxed_weathered_copper: 10,
  cut_copper: 10,
  exposed_cut_copper: 10,
  weathered_cut_copper: 10,
  oxidized_cut_copper: 10,
  waxed_cut_copper: 10,
  waxed_exposed_cut_copper: 10,
  waxed_weathered_cut_copper: 10,
  cut_copper_stairs: 10,
  exposed_cut_copper_stairs: 10,
  weathered_cut_copper_stairs: 10,
  oxidized_cut_copper_stairs: 10,
  waxed_cut_copper_stairs: 10,
  waxed_exposed_cut_copper_stairs: 10,
  waxed_weathered_cut_copper_stairs: 10,
  cut_copper_slab: 10,
  exposed_cut_copper_slab: 10,
  weathered_cut_copper_slab: 10,
  oxidized_cut_copper_slab: 10,
  waxed_cut_copper_slab: 10,
  waxed_exposed_cut_copper_slab: 10,
  waxed_weathered_cut_copper_slab: 10,
  double_cut_copper_slab: 10,
  exposed_double_cut_copper_slab: 10,
  weathered_double_cut_copper_slab: 10,
  oxidized_double_cut_copper_slab: 10,
  waxed_double_cut_copper_slab: 10,
  waxed_exposed_double_cut_copper_slab: 10,
  waxed_weathered_double_cut_copper_slab: 10,
  cave_vines_body_with_berries: 10,
  cave_vines_head_with_berries: 10,
  smooth_basalt: 10,
  deepslate: 10,
  cobbled_deepslate: 10,
  cobbled_deepslate_slab: 10,
  cobbled_deepslate_stairs: 10,
  cobbled_deepslate_wall: 10,
  polished_deepslate: 10,
  polished_deepslate_slab: 10,
  polished_deepslate_stairs: 10,
  polished_deepslate_wall: 10,
  deepslate_tiles: 10,
  deepslate_tile_slab: 10,
  deepslate_tile_stairs: 10,
  deepslate_tile_wall: 10,
  deepslate_bricks: 10,
  deepslate_brick_slab: 10,
  deepslate_brick_stairs: 10,
  deepslate_brick_wall: 10,
  chiseled_deepslate: 10,
  cobbled_deepslate_double_slab: 10,
  polished_deepslate_double_slab: 10,
  deepslate_tile_double_slab: 10,
  deepslate_brick_double_slab: 10,
  deepslate_lapis_ore: 10,
  deepslate_iron_ore: 10,
  deepslate_gold_ore: 10,
  deepslate_redstone_ore: 10,
  lit_deepslate_redstone_ore: 10,
  deepslate_diamond_ore: 10,
  deepslate_coal_ore: 10,
  deepslate_emerald_ore: 10,
  deepslate_copper_ore: 10,
  cracked_deepslate_tiles: 10,
  cracked_deepslate_bricks: 10,
  glow_lichen: 10,
  candle: 10,
  white_candle: 10,
  orange_candle: 10,
  magenta_candle: 10,
  light_blue_candle: 10,
  yellow_candle: 10,
  lime_candle: 10,
  pink_candle: 10,
  gray_candle: 10,
  light_gray_candle: 10,
  cyan_candle: 10,
  purple_candle: 10,
  blue_candle: 10,
  brown_candle: 10,
  green_candle: 10,
  red_candle: 10,
  black_candle: 10,
  candle_cake: 10,
  white_candle_cake: 10,
  orange_candle_cake: 10,
  magenta_candle_cake: 10,
  light_blue_candle_cake: 10,
  yellow_candle_cake: 10,
  lime_candle_cake: 10,
  pink_candle_cake: 10,
  gray_candle_cake: 10,
  light_gray_candle_cake: 10,
  cyan_candle_cake: 10,
  purple_candle_cake: 10,
  blue_candle_cake: 10,
  brown_candle_cake: 10,
  green_candle_cake: 10,
  red_candle_cake: 10,
  black_candle_cake: 10,
  waxed_oxidized_copper: 10,
  waxed_oxidized_cut_copper: 10,
  waxed_oxidized_cut_copper_stairs: 10,
  waxed_oxidized_cut_copper_slab: 10,
  waxed_oxidized_double_cut_copper_slab: 10,
  raw_iron_block: 10,
  raw_copper_block: 10,
  raw_gold_block: 10,
  infested_deepslate: 10,
  sculk: 10,
  sculk_vein: 10,
  sculk_catalyst: 10,
  sculk_shrieker: 10,
  client_request_placeholder_block: 10,
  mysterious_frame: 10,
  mysterious_frame_slot: 10,
  frog_spawn: 10,
  pearlescent_froglight: 10,
  verdant_froglight: 10,
  ochre_froglight: 10,
};

export const ITEM_SCORESHEET: { [type: string]: number } = {
  end_crystal: 1000,
  ender_eye: 800,
  diamond: 800,
  enchanted_golden_apple: 500,
  music_disc_13: 400,
  music_disc_cat: 400,
  music_disc_blocks: 400,
  music_disc_chirp: 400,
  music_disc_far: 400,
  music_disc_mall: 400,
  music_disc_mellohi: 400,
  music_disc_stal: 400,
  music_disc_strad: 400,
  music_disc_ward: 400,
  music_disc_11: 400,
  music_disc_pigstep: 400,
  music_disc_otherside: 400,
  music_disc_wait: 400,
  netherite_axe: 170,
  netherite_hoe: 170,
  netherite_helmet: 170,
  netherite_chestplate: 170,
  netherite_leggings: 170,
  netherite_boots: 170,
  netherite_ingot: 170,
  netherite_sword: 170,
  netherite_shovel: 170,
  netherite_pickaxe: 170,
  netherite_scrap: 170,
  emerald: 150,
  diamond_horse_armor: 120,
  diamond_sword: 120,
  diamond_shovel: 120,
  diamond_pickaxe: 120,
  diamond_axe: 120,
  diamond_hoe: 120,
  diamond_helmet: 120,
  diamond_chestplate: 120,
  diamond_leggings: 120,
  diamond_boots: 120,
  written_book: 50,
  writable_book: 40,
  goat_horn: 40,
  amethyst_shard: 40,
  spyglass: 40,
  soul_campfire: 40,
  raw_gold: 40,
  glow_frame: 40,
  golden_horse_armor: 40,
  golden_hoe: 30,
  golden_sword: 30,
  golden_shovel: 30,
  golden_pickaxe: 30,
  golden_axe: 30,
  golden_helmet: 30,
  golden_chestplate: 30,
  golden_leggings: 30,
  golden_boots: 30,
  empty_map: 30,
  raw_copper: 20,
  netherbrick: 20,
  raw_iron: 20,
  gold_nugget: 20,
  chainmail_helmet: 20,
  chainmail_chestplate: 20,
  chainmail_leggings: 20,
  chainmail_boots: 20,
  gold_ingot: 14,
  leather_helmet: 16,
  leather_chestplate: 16,
  leather_leggings: 16,
  leather_horse_armor: 20,
  leather_boots: 16,
  iron_horse_armor: 12,
  iron_helmet: 10,
  iron_chestplate: 10,
  iron_leggings: 10,
  iron_sword: 10,
  iron_boots: 10,
  apple: 10,
  bow: 10,
  arrow: 10,
  coal: 10,
  iron_ingot: 8,
  flint_and_steel: 6,
  bowl: 6,
  stone_sword: 5,
  stone_shovel: 5,
  stone_pickaxe: 5,
  stone_axe: 5,
  iron_shovel: 4,
  iron_pickaxe: 4,
  iron_axe: 4,
  wooden_sword: 3,
  wooden_shovel: 3,
  wooden_pickaxe: 3,
  wooden_axe: 3,
  stick: 2,
  mushroom_stew: 20,
  string: 2,
  feather: 3,
  gunpowder: 12,
  wooden_hoe: 3,
  stone_hoe: 10,
  iron_hoe: 10,
  wheat_seeds: 10,
  wheat: 10,
  bread: 10,
  flint: 10,
  porkchop: 10,
  cooked_porkchop: 10,
  painting: 10,
  golden_apple: 10,
  oak_sign: 10,
  wooden_door: 10,
  bucket: 10,
  minecart: 10,
  saddle: 10,
  iron_door: 10,
  redstone: 10,
  snowball: 10,
  boat: 10,
  leather: 10,
  kelp: 10,
  brick: 10,
  clay_ball: 10,
  sugar_cane: 10,
  paper: 10,
  book: 10,
  slime_ball: 10,
  chest_minecart: 10,
  egg: 10,
  compass: 10,
  fishing_rod: 10,
  clock: 10,
  glowstone_dust: 10,
  cod: 10,
  cooked_cod: 10,
  dye: 10,
  bone: 10,
  sugar: 10,
  cake: 10,
  bed: 10,
  repeater: 10,
  cookie: 10,
  filled_map: 10,
  shears: 10,
  melon_slice: 10,
  pumpkin_seeds: 10,
  melon_seeds: 10,
  beef: 10,
  cooked_beef: 10,
  chicken: 10,
  cooked_chicken: 10,
  rotten_flesh: 10,
  ender_pearl: 10,
  blaze_rod: 10,
  ghast_tear: 10,
  nether_wart: 10,
  potion: 10,
  glass_bottle: 10,
  spider_eye: 10,
  fermented_spider_eye: 10,
  blaze_powder: 10,
  magma_cream: 10,
  brewing_stand: 10,
  cauldron: 10,
  glistering_melon_slice: 10,
  spawn_egg: 10,
  experience_bottle: 10,
  fire_charge: 10,
  frame: 10,
  flower_pot: 10,
  carrot: 10,
  potato: 10,
  baked_potato: 10,
  poisonous_potato: 10,
  golden_carrot: 10,
  skull: 10,
  carrot_on_a_stick: 10,
  nether_star: 10,
  pumpkin_pie: 10,
  firework_rocket: 10,
  firework_star: 10,
  enchanted_book: 10,
  comparator: 10,
  quartz: 10,
  tnt_minecart: 10,
  hopper_minecart: 10,
  prismarine_shard: 10,
  hopper: 10,
  rabbit: 10,
  cooked_rabbit: 10,
  rabbit_stew: 10,
  rabbit_foot: 10,
  rabbit_hide: 10,
  lead: 10,
  name_tag: 10,
  prismarine_crystals: 10,
  mutton: 10,
  cooked_mutton: 10,
  armor_stand: 10,
  spruce_door: 10,
  birch_door: 10,
  jungle_door: 10,
  acacia_door: 10,
  dark_oak_door: 10,
  chorus_fruit: 10,
  popped_chorus_fruit: 10,
  banner_pattern: 10,
  dragon_breath: 10,
  splash_potion: 10,
  lingering_potion: 10,
  sparkler: 10,
  command_block_minecart: 10,
  elytra: 10,
  shulker_shell: 10,
  banner: 10,
  medicine: 10,
  balloon: 10,
  rapid_fertilizer: 10,
  totem_of_undying: 800,
  bleach: 10,
  iron_nugget: 10,
  ice_bomb: 10,
  chalkboard: 10,
  trident: 10,
  portfolio: 10,
  beetroot: 10,
  beetroot_seeds: 10,
  beetroot_soup: 10,
  salmon: 10,
  tropical_fish: 10,
  pufferfish: 10,
  cooked_salmon: 10,
  dried_kelp: 10,
  nautilus_shell: 10,
  heart_of_the_sea: 10,
  scute: 10,
  turtle_helmet: 10,
  phantom_membrane: 10,
  crossbow: 10,
  spruce_sign: 10,
  birch_sign: 10,
  jungle_sign: 10,
  acacia_sign: 10,
  dark_oak_sign: 10,
  sweet_berries: 10,
  shield: 10,
  glow_ink_sac: 10,
  campfire: 10,
  suspicious_stew: 10,
  honeycomb: 10,
  honey_bottle: 10,
  lodestone_compass: 10,
  crimson_sign: 10,
  warped_sign: 10,
  crimson_door: 10,
  warped_door: 10,
  warped_fungus_on_a_stick: 10,
  chain: 10,
  nether_sprouts: 10,
};
