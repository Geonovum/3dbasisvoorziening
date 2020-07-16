# Bijlage: gebruikte parameters voor 3Dfier

Voor het maken van de 3D Basisvoorziening is gebruik gemaakt van de volgende parameters voor 3Dfier:

<pre>
lifting_options: 
  Building:
    lod: 1
    floor: true
    inner_walls: true
    triangulate: false
    ground:
      height: percentile-10
      use_LAS_classes:
        - 2
        - 9
    roof:
      height: percentile-90
      use_LAS_classes:
        - 6
  Terrain:
    simplification: 0
    simplification_tinsimp: 0.1
    use_LAS_classes:
      - 2
  Forest:
    simplification: 0
    simplification_tinsimp: 0.1
    use_LAS_classes:
      - 2
  Water:
    height: percentile-10
    use_LAS_classes_within:
      - 9
  Road:
    height: percentile-50
    filter_outliers: true
    flatten: true
    use_LAS_classes:
      - 2
  Separation:
    height: percentile-80
    use_LAS_classes:
      - 2
      - 17
  Bridge/Overpass:
    height: percentile-50
    flatten: true
    use_LAS_classes:
      - 99   
    use_LAS_classes_within:
      - 17
    omit_LAS_classes:
      - 0 # unclassified
      - 1 # other
      - 3 # vegation
      - 4 # vegation
      - 5 # vegation 
    thinning: 0
options:
  building_radius_vertex_elevation: 3.0
  radius_vertex_elevation: 1.0
  threshold_jump_edges: 0.5
  threshold_bridge_jump_edges: 1.0
  stitching: true 
</pre>