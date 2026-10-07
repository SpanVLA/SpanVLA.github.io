# SpanVLA project website

Static project page for the updated SpanVLA manuscript: **SpanVLA: Learning from Negative-Recovery Samples with Fast Action Bridging for Vision-Language-Action Model**.

## Local preview

From this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. No build step or package installation is required.

## Content and figures

The page follows the updated `SpanVLA_ICLR` manuscript. Updated manuscript figures are exported at 3× resolution to `static/images/`. Teaser, framework, and bridge also have animated SVG versions converted directly from their source PDFs with Poppler: original vector arrows, token blocks, flow arrows, and benchmark bars animate independently. The SVGs embed their source assets and need no external libraries. Original negative and recovery GIF demonstrations are retained in the results section. The ablation section is omitted. Original assets remain available.

Benchmark tables are HTML for accessibility and mobile scrolling. Figure links open full-resolution PNGs. Styles and citation-copy behavior are in `static/css/index.css` and `static/js/index.js`.

The linked arXiv record currently contains the earlier version. Data and benchmark resources are marked coming soon pending release. Best-of-6 results are explicitly distinguished from single-output results.

## Citation

```bibtex
@article{zhou2026spanvla,
  author  = {Zhou, Zewei and Yang, Ruining and Qi, Xuewei and Guo, Yiluan and Chen, Sherry X. and Feng, Tao and Pistunova, Kateryna and Shen, Yishan and Su, Lili and Ma, Jiaqi},
  title   = {SpanVLA: Learning from Negative-Recovery Samples with Fast Action Bridging for Vision-Language-Action Model},
  journal = {arXiv preprint arXiv:2604.19710},
  year    = {2026}
}
```

Original template credit: [Nerfies](https://nerfies.github.io/).

## Motion

Scroll reveals use IntersectionObserver. The page respects the system reduced-motion preference by swapping remaining animated figures and GIFs to static PNGs and disabling reveal transitions. Framework and action-bridge figures use static PNGs and are excluded from scroll reveals. SVG animations are illustrative and do not represent additional experimental rollouts.

Dataset examples use the original `data_dis.pdf`, with the distribution chart and legend image objects removed from the original PDF vector export; all negative/recovery objects and original colors are retained.
